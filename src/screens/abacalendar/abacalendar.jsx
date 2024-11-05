import { FlatList, View } from "react-native";
import { styles } from "./abacalendar.style";
import { appointments } from "../../constants/data";
import Appointment from "../../components/appointment/appointment";


function AbaCalendar() {

    return (

        <View style={styles.container}>

            <FlatList data={appointments}
                keyExtractor={(appoint) => appoint.id_appointment}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => {
                    return  <Appointment service= {item.service}
                    doctor={item.doctor}
                    specialty={item.specialty}
                    />
                
                }}

            />



        </View>


    )

}

export default AbaCalendar;