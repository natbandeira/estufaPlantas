import Topo from "@/components/Topo";

export default function Home() {
  return (
     <div>
      <Topo/>
          <div style={menuTopo}>
            <div>Plantas</div>
            <div>Adubação</div>
            <div style={{color: '#CDC0A6', backgroundColor:'#742A00'}}>Tratamentos</div>
          </div>          
    </div>
  );
}

const menuTopo = {
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  color:'CDC0A6',
  backgroundColor:'#eee',
  fontSiz:'20px'
}
