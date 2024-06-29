export default function App() {
  return (
    <div className="main flex justify-center items-center h-screen w-screen">
        <video className="w-screen h-screen object-cover -z-2 absolute" autoPlay muted loop>
            <source src="./Diamond City-Goodneighbor - The Commonwealth - Fallout 4 Ambience.mp4" type="video/mp4" />
        </video>

        <div className="pipBoyPanel bg-[#032400] z-1 relative h-[60vh] w-4/5 rounded-2xl text-[#14FF00] font=['Inter'] text-[24px] font-bold p-4 pt-1">
            <div className="border-top-left w-[40px] h-[40px] -z-1 absolute top-5 border-l-[3px] border-t-[3px] border-[#14FF00]"></div>
            <div className="border-top-right w-[40px] h-[40px] -z-1 absolute top-5 right-5 border-r-[3px] border-t-[3px] border-[#14FF00]"></div>
            <div className="border-bottom-left w-[40px] h-[40px] -z-1 absolute bottom-5 border-l-[3px] border-b-[3px] border-[#14FF00]"></div>
            <div className="border-bottom-right w-[40px] h-[40px] -z-1 absolute bottom-5 right-5 border-r-[3px] border-b-[3px] border-[#14FF00]"></div>
            
            <h1 className="title text-center">Fallout 4 Radio</h1>
            <div className="waveIndicator text-center">[Wave Here]</div>
            <div className="stationOption text-center">
                <div className="diamondCityRadioOption font-bold text-[16px]">
                    <div className="squareIcon">.</div>
                    <p>Diamond City Radio</p>
                </div>
                <div className="classicalRadioOption font-bold text-[16px]">
                    <div className="squareIcon">.</div>
                    <p>Classical Radio</p>
                </div>
                <div className="eadioFreedomOption font-bold text-[16px]">
                    <div className="squareIcon">.</div>
                    <p>Radio Freedom</p>
                </div>
            </div>
        </div>
    </div>
  )
}