import {
    Page,
    Text,
    View,
    Document,
    StyleSheet,
    Image,
} from "@react-pdf/renderer";
const styles = StyleSheet.create({
    page: {
        backgroundColor: "#fff",
        flexDirection: "col",
        alignItems: "stretch",
        padding: 20,
    },
    section: {
        border: "1px solid #000",
        padding: 20,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    logo: {
        width: 70,
    },
    brand: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 2,
    },
    planHogar: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
    },
    brandName: {
        fontSize: 32,
        fontWeight: 700,
    },
    info: {
        fontSize: 12,
        textAlign: "center",
    },
    infoRecibo: {
        borderBottom: "2px solid #000",
        textAlign: "center",
        margin: "20px 0",
        paddingBottom: "20px",
    },
    title: {
        fontWeight: 800,
        fontSize: 20,
    },
    text14: {
        fontSize: 14,
    },
    data: {
        fontSize: 14,
        marginHorizontal: 30,
    },
    form: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        margin: "8px 0",
    },
    row: {
        margin: "8px 0",
    },
    bold: {
        fontWeight: 700,
    },
});
function ReciboPago({ item, formatDate, info }) {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <div style={styles.brand}>
                        <Image src="/logo.png" style={styles.logo} />
                        <div style={styles.planHogar}>
                            <Text style={styles.brandName}>Plan</Text>
                            <Text style={styles.brandName}>Hogar</Text>
                        </div>
                    </div>
                    <div style={styles.info}>
                        <Text>CASA CENTRAL</Text>
                        <Text>Fausto Toranzo 1ra. Cuadra</Text>
                        <Text>Santa Maria, Catamarca</Text>
                        <Text>Cel. 3838-415859</Text>
                    </div>
                </View>
                <View style={styles.infoRecibo}>
                    <Text style={styles.title}>
                        Recibo de cobranza Plan Hogar
                    </Text>
                </View>
                <View style={styles.data}>
                    <Text style={styles.row}>
                        Cliente:{" "}
                        {item.ClientPlan?.Client?.nombre || info.cliente}
                    </Text>
                    <div style={styles.form}>
                        <Text>
                            Plan: {item.ClientPlan?.Plan?.nombre || info.plan}
                        </Text>
                        <Text>Cuota nro: {item.numeroCuota}</Text>
                    </div>
                    <div style={styles.form}>
                        <Text>Monto: ${item.monto}</Text>
                        <Text>
                            Fecha: {formatDate(item.fecha.split("T")[0])}
                        </Text>
                    </div>
                    <Text style={styles.row}>Medio: {item.medio}</Text>
                    <Text style={styles.row}>Cobrador: {item.cobrador}</Text>
                </View>
            </Page>
        </Document>
    );
}

export default ReciboPago;
