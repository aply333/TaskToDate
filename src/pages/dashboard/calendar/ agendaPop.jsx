import Container from "../../../components/conainter/Contianer";

function AgendaPop({color, popDate, popAgendas}){
    const dateStyle = {
        fontFamily: "'Rancho', cursive",
        textAlign: "center",
        marginTop: "0rem",
        fontSize: "2.75rem",
        color: "white"
    }
    console.log("agendas", popAgendas)
    return(
        <>
            <Container color={color} height="3rem" all>
                <h1 style={dateStyle}>{popDate}</h1>
                {popAgendas.map(agenda => {
                    <h1>{agenda.agenda_title}</h1>
                })}
            </Container>
        </>
    )
}

export default AgendaPop;