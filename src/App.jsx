export default function App() {
  return (
    <div className="main flex justify-center items-center h-screen w-screen">
        <video className="w-screen h-screen object-cover -z-1 absolute" autoPlay muted loop>
            <source src="./Diamond City-Goodneighbor - The Commonwealth - Fallout 4 Ambience.mp4" type="video/mp4" />
        </video>

        <div className="pipBoyPanel bg-[#032400] z-1 relative h-[60vh] w-4/5 rounded-2xl text-[#14FF00] font=['Inter'] text-[24px] font-bold">
            <h1 className="title text-center">Fallout 4 Radio</h1>
            <div className="waveIndicator">[Wave Here]</div>
            <div className="stationOption">
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