import Wave from 'react-wavify'

export default function App() {
  return (
    <div className="main flex justify-center items-center h-screen w-screen font-['Inter']">
        <video className="w-screen h-screen object-cover -z-2 absolute" autoPlay muted loop>
            <source src="./Diamond City-Goodneighbor - The Commonwealth - Fallout 4 Ambience.mp4" type="video/mp4" />
        </video>

        <div className="pipBoyPanel bg-[#032400] z-1 relative h-[480px] w-[288px] rounded-2xl text-[#14FF00] font=['Inter'] text-[24px] font-bold p-4 pt-1">
            <div className="border-group">
                <div className="border-top-left w-[40px] h-[40px] -z-1 absolute top-5 border-l-[3px] border-t-[3px] border-[#14FF00]"></div>
                <div className="border-top-right w-[40px] h-[40px] -z-1 absolute top-5 right-4 border-r-[3px] border-t-[3px] border-[#14FF00]"></div>
                <div className="border-bottom-left w-[40px] h-[40px] -z-1 absolute bottom-5 border-l-[3px] border-b-[3px] border-[#14FF00]"></div>
                <div className="border-bottom-right w-[40px] h-[40px] -z-1 absolute bottom-5 right-4 border-r-[3px] border-b-[3px] border-[#14FF00]"></div>
            </div>
            
            <h1 className="title text-center text-[22px]">Fallout 4 Radio</h1>
            <div className="waveIndicator text-center h-[18vh] mt-[65px] border-b-[3px] border-r-[3px] border-[#14FF00]">
                <Wave className="bottom-1.5 left-0.5 relative" 
                fill='#032400'
                stroke='#14FF00'
                strokeWidth={5}
                paused={false}
                style={{ display: 'flex' }}
                options={{
                height: 70,
                amplitude: 30,
                speed: 2,
                points: 10
                }}
                />
            </div>
            <div className="stationOption text-center mt-[25px]">
                <div className="diamondCityRadioOption font-bold text-[16px] h-[42px] hover:bg-[#14FF00] grid grid-cols-[20%_80%] justify-items-center items-center hover:text-[#032400] cursor-pointer">
                    <div className="squareIcon w-[17px] h-[17px] bg-[#032400]"></div>
                    <p className="justify-self-start">Diamond City Radio</p>
                </div>
                <div className="classicalRadioOption font-bold text-[16px] h-[42px] hover:bg-[#14FF00] grid grid-cols-[20%_80%] justify-items-center items-center hover:text-[#032400] cursor-pointer">
                    <div className="squareIcon w-[17px] h-[17px] bg-[#032400]"></div>
                    <p className="justify-self-start">Classical Radio</p>
                </div>
                <div className="eadioFreedomOption font-bold text-[16px] h-[42px] hover:bg-[#14FF00] grid grid-cols-[20%_80%] justify-items-center items-center hover:text-[#032400] cursor-pointer">
                    <div className="squareIcon w-[17px] h-[17px] bg-[#032400]"></div>
                    <p className="justify-self-start">Radio Freedom</p>
                </div>
            </div>
        </div>
    </div>
  )
}