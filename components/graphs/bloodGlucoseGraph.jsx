import React, { useMemo } from "react";
import { View, Text, StyleSheet } from "react-native";
import { LineChart } from "react-native-chart-kit";

const BloodGlucoseGraph = ({ readings = [] , width = 320 }) => {
   
  const chartData = useMemo(() => {
    const sortedReadings = [...readings]
      .filter(
        (item) =>
          item.value != null &&
          Number.isFinite(Number(item.value)) &&
          item.createdAt,
      )
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
      );

    return {
      labels: sortedReadings.map((item) =>
        new Date(item.createdAt).toLocaleDateString(undefined, {
          day: "numeric",
          month: "short",
        }),
      ),
      datasets: [
        {
          data: sortedReadings.map((item) => Number(item.value)),
          color: () => "#3E82C4",
          strokeWidth: 2,
        },
      ],
    };
  }, [readings]);

  const hasReadings = chartData.labels.length > 0;

  if (!hasReadings) {
    return (
        <View style={styles.empty}>
            <Text style={styles.emptyTitle}>No readings yet</Text>
            <Text style={styles.emptyText}>
                Record your blood glucose to see your trends.
            </Text>
        </View>
    );
  }

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Blood glucose trends</Text>

        <View style={styles.legend}>
            <Text style={styles.values}>
                .Blood glucose (mg/dL)
            </Text>
            
        </View>

        <LineChart
        data={chartData}
        width={Math.max(width, 280)}
        height={240}
        chartConfig={{
            backgroundColor: "#FFFFFF",
            backgroundGradientFrom: "#FFFFFF",
            backgroundGradientTo: "#FFFFFF",
            decimalPlaces: 0,
            color: (opacity = 1) => 
                `rgba(40,60,80, ${opacity})`,
            labelColor: ()=> "#64748B",
            propsForDots: {
                r: "3",
            },
            propsForBackgroundLines: {
                stroke: "#E5E7EB",
            },
        }}
        bezier
        fromZero={false}
        style={styles.chart}
        />
    </View>
  )
};
 

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        borderRadius: 16,
        paddingVertical: 16,
        paddingLeft: 8,
        marginVertical: 12,
    },
    title: {
        fontSize: 17,
        fontFamily: "interBold",
        fontWeight: "600",
        marginHorizontal: 12,
        marginBottom: 12,
        color: "#12347C"
    },
    legend: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 12,
        marginHorizontal: 12,
        marginBottom: 12,
    },
    values: {
        color: "#3E82C4",
        fontSize: 12,
    },
    chart: {
        borderRadius: 12,
    },
    empty: {
        backgroundColor: "#FFFFFF",
        borderRadius: 16,
        padding: 24,
        alignItems: "center",
        marginVertical: 12,
    },
    emptyTitle: {
        fontSize: 16,
        fontWeight: "600",
        color: "#12347C",
    },
    emptyText: {
        color: "#64748B",
        textAlign: "center",
        marginTop: 8,
    }
})

export default BloodGlucoseGraph