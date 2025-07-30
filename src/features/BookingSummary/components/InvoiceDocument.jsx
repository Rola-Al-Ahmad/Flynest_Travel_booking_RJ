import React, { useMemo } from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";


const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 11,
    fontFamily: "Helvetica",
    lineHeight: 1.6,
    backgroundColor: "#fafafa",
  },
  header: {
    fontSize: 22,
    marginBottom: 10,
    textAlign: "center",
    fontWeight: "bold",
    color: "#2e3a59",
  },
  tagline: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    fontStyle: "italic",
    color: "#666",
  },
  section: {
    marginBottom: 12,
  },
  label: {
    marginBottom: 4,
  },
  bold: {
    fontWeight: "bold",
  },
  line: {
    borderBottomWidth: 1,
    borderColor: "#ddd",
    marginVertical: 10,
  },
  table: {
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#ccc",
    marginTop: 12,
  },
  tableRow: {
    flexDirection: "row",
  },
  tableColHeader: {
    width: "70%",
    backgroundColor: "#f0f0f0",
    borderRightWidth: 1,
    padding: 6,
    textAlign: "center",
    fontWeight: "bold",
  },
  tableColHeaderRight: {
    width: "30%",
    backgroundColor: "#f0f0f0",
    padding: 6,
    textAlign: "center",
    fontWeight: "bold",
  },
  tableCol: {
    width: "70%",
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderColor: "#ccc",
    padding: 6,
    textAlign: "left",
  },
  tableColRight: {
    width: "30%",
    borderTopWidth: 1,
    borderColor: "#ccc",
    padding: 6,
    textAlign: "center",
  },
  tableAltRow: {
    backgroundColor: "#fcfcfc",
  },
  totalRow: {
    backgroundColor: "#eef6ff",
    fontWeight: "bold",
  },
});

const InvoiceDocument = ({ data, selectedTour }) => {
  const {
    date,
    name,
    location,
    adults,
    children,
    tourGuide,
    dinner,
    subTotal,
    tax,
    total,
    transport,
    restaurant,
    hotel,
  } = data;
  
  const lineItems = useMemo(() => {
    const base = [
      { label: "Adults", value: adults },
      { label: "Children", value: children },
      { label: "Tour Guide", value: `$${tourGuide.toFixed(2)}` },
      { label: "Dinner", value: `$${dinner.toFixed(2)}` },
    ];

    const filteredBase =
      selectedTour?.type !== "tours"
        ? base.filter((f) => f.label !== "Adults" && f.label !== "Children")
        : base;

    const optional = [
      transport?.title && {
        label: `Transport - ${transport.title}`,
        value: `$${transport.cost.toFixed(2)}`,
      },
      restaurant?.title && {
        label: `Restaurant - ${restaurant.title}`,
        value: `$${restaurant.cost.toFixed(2)}`,
      },
      hotel?.title && {
        label: `Hotel - ${hotel.title}`,
        value: `$${hotel.cost.toFixed(2)}`,
      },
    ].filter(Boolean);

    const totals = [
      { label: "Sub Total", value: `$${subTotal.toFixed(2)}` },
      { label: "VAT Tax", value: `$${tax.toFixed(2)}` },
      { label: "Total Amount", value: `$${total.toFixed(2)}`, isTotal: true },
    ];

    return [...filteredBase, ...optional, ...totals];
  }, [
    adults,
    children,
    tourGuide,
    dinner,
    transport,
    restaurant,
    hotel,
    subTotal,
    tax,
    total,
    selectedTour,
  ]);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.header}>Flynest Booking Invoice</Text>
        <Text style={styles.tagline}>
          Thank you for choosing FLYNEST! We make your journey unforgettable.
        </Text>

        <View style={styles.section}>
          <Text style={styles.label}>
            <Text style={styles.bold}>Date: </Text> {date}
          </Text>
          <Text style={styles.label}>
            <Text style={styles.bold}>Location: </Text> {location}
          </Text>
          <Text style={styles.label}>
            <Text style={styles.bold}>Name: </Text> {name}
          </Text>
        </View>

        <View style={styles.table}>
          {/* Header */}
          <View style={styles.tableRow}>
            <Text style={styles.tableColHeader}>Item Description</Text>
            <Text style={styles.tableColHeaderRight}>Amount</Text>
          </View>

          {lineItems.map((item, index) => (
            <View
              key={item.label}
              style={[
                styles.tableRow,
                item.isTotal
                  ? styles.totalRow
                  : index % 2 !== 0 && styles.tableAltRow,
              ]}
            >
              <Text style={styles.tableCol}>{item.label}</Text>
              <Text style={styles.tableColRight}>{item.value}</Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};

export default React.memo(InvoiceDocument);
