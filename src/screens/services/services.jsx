import { FlatList, Image, Text, View } from "react-native";
import { styles } from "./services.style";
import { doctors, doctors_services } from "../../constants/data";
import icon from "../../constants/icon"
import Service from "../../components/service/service";


function Services() {

    return (

        <View style={styles.container}>

            <View style={styles.banner}>
                <Image source={icon.female} />
                <Text style={styles.name}>Fulustreco</Text>
                <Text style={styles.specialty}> Cardiologita </Text>
            </View>

            <FlatList data={doctors_services}
                keyExtractor={(serv) => serv.id_service}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => {
                    return <Service description={item.description} price={item.price} />
                }}
            />



        </View>


    )

}

export default Services;