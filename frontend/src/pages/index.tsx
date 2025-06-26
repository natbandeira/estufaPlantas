import Topo from "@/components/Topo";

export default function Home() {
  return (
     <div>
          <div style={menuTopo}>
            <div style={{color: '#CDC0A6', backgroundColor:'#6d4b76'}}>Plantas</div>
            <div style={{color: '#CDC0A6', backgroundColor:'#6d4b76'}}>Adubação</div>
            <div style={{color: '#CDC0A6', backgroundColor:'#6d4b76'}}>Tratamentos</div>
          </div>    
          <Topo/>      
    </div>
  );
}

const menuTopo = {
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  color:'#6d4b76',
  backgroundColor:'#6d4b76',
  fontSize:'20px',
  gap: '40px',
  height: '50px'
}
