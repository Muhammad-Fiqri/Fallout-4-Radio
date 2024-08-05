import Wave from 'react-wavify';
import { useRef } from 'react';
import { useState } from 'react';

export default function App() {
    const [waveAmplitudo,setWaveAmplitudo] = useState(5);

    function playSwitchSFX() {
        let audioSwitchSfx = document.getElementById("audioSwitchSfx");
        audioSwitchSfx.play();
    }

    function playHoverSFX() {
        let audioHoverSfx = document.getElementById("audioHoverSfx");
        audioHoverSfx.play();
    }

    function playDiamondCityRadio() {
        playSwitchSFX();

        let audioDiamondCity = document.getElementById("audioDiamondCity");
        let audioClassicalRadio = document.getElementById("audioClassicalRadio");
        let audioRadioFreedom = document.getElementById("audioRadioFreedom");

        let diamondCitySquare = document.querySelector(".diamondCityRadioOption > .squareIcon");
        let classicalRadioSquere = document.querySelector(".classicalRadioOption > .squareIcon");
        let radioFreedomSquare = document.querySelector(".radioFreedomOption > .squareIcon");

        if(audioDiamondCity.paused){
            audioDiamondCity.play();
            audioClassicalRadio.pause();
            audioRadioFreedom.pause();

            diamondCitySquare.style.backgroundColor = "#14FF00";
            classicalRadioSquere.style.backgroundColor = "#032400";
            radioFreedomSquare.style.backgroundColor = "#032400";

            setWaveAmplitudo(30);
        } else {
            audioDiamondCity.pause();

            diamondCitySquare.style.backgroundColor = "#032400";

            setWaveAmplitudo(5);
        }
    }

    function playClassicalRadio() {
        playSwitchSFX();

        let audioDiamondCity = document.getElementById("audioDiamondCity");
        let audioClassicalRadio = document.getElementById("audioClassicalRadio");
        let audioRadioFreedom = document.getElementById("audioRadioFreedom");
        
        let diamondCitySquare = document.querySelector(".diamondCityRadioOption > .squareIcon");
        let classicalRadioSquere = document.querySelector(".classicalRadioOption > .squareIcon");
        let radioFreedomSquare = document.querySelector(".radioFreedomOption > .squareIcon");
        
        if(audioClassicalRadio.paused){
            audioClassicalRadio.play();
            audioDiamondCity.pause();
            audioRadioFreedom.pause();

            diamondCitySquare.style.backgroundColor = "#032400";
            classicalRadioSquere.style.backgroundColor = "#14FF00";
            radioFreedomSquare.style.backgroundColor = "#032400";
            
            setWaveAmplitudo(30);
        } else {
            audioClassicalRadio.pause()

            classicalRadioSquere.style.backgroundColor = "#032400";

            setWaveAmplitudo(5);
        }
    }

    function playRadioFreedom() {
        playSwitchSFX();

        let audioDiamondCity = document.getElementById("audioDiamondCity");
        let audioClassicalRadio = document.getElementById("audioClassicalRadio");
        let audioRadioFreedom = document.getElementById("audioRadioFreedom");
        
        let diamondCitySquare = document.querySelector(".diamondCityRadioOption > .squareIcon");
        let classicalRadioSquere = document.querySelector(".classicalRadioOption > .squareIcon");
        let radioFreedomSquare = document.querySelector(".radioFreedomOption > .squareIcon");

        if(audioRadioFreedom.paused){
            audioRadioFreedom.play();
            audioDiamondCity.pause();
            audioClassicalRadio.pause();

            diamondCitySquare.style.backgroundColor = "#032400";
            classicalRadioSquere.style.backgroundColor = "#032400";
            radioFreedomSquare.style.backgroundColor = "#14FF00";

            setWaveAmplitudo(30);
        } else {
            audioRadioFreedom.pause();

            radioFreedomSquare.style.backgroundColor = "#032400";

            setWaveAmplitudo(5);
        }
    }

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
                <div className="waveBox text-center h-[144px] mt-[65px] border-b-[3px] border-r-[3px] border-[#14FF00]">
                    <Wave className="waveIndicator bottom-1.5 left-0.5 relative" 
                    fill='#032400'
                    stroke='#14FF00'
                    strokeWidth={5}
                    paused={false}
                    style={{ display: 'flex' }}
                    options={{
                    height: 70,
                    amplitude: waveAmplitudo,
                    speed: 2,
                    points: 20
                    }}
                    />
                </div>
                <audio loop id='audioDiamondCity'
                    src="./utomp3.com - - Fallout 4  Full Diamond City Radio Playlist.mp3"
                    crossOrigin="anonymous"
                ></audio>
                <audio loop id='audioClassicalRadio'
                    src="./utomp3.com - - Fallout 4 Classical Radio all songs.mp3"
                    crossOrigin="anonymous"
                ></audio>
                <audio loop id='audioRadioFreedom'
                    src="./utomp3.com - Fallout 4   Radio Freedom   Minutemen Radio   Full Playlist Soundtrack.mp3"
                    crossOrigin="anonymous">
                </audio>
                <audio id="audioSwitchSfx"
                    src="./utomp3.com - Fallout 4 Pipboy Switch sfx.mp3"
                    crossOrigin="anonymous">
                </audio>
                <audio id="audioHoverSfx"
                    src="./utomp3.com - Fallout 4 Pipboy Hover sfx.mp3"
                    crossOrigin="anonymous">
                </audio>
                <div className="stationOption text-center mt-[25px]">
                    <div onClick={playDiamondCityRadio} onMouseEnter={playHoverSFX}
                    className="diamondCityRadioOption font-bold text-[16px] h-[42px] hover:bg-[#14FF00] grid grid-cols-[20%_80%] justify-items-center items-center hover:text-[#032400] cursor-pointer">
                        <div className="squareIcon w-[17px] h-[17px] bg-[#032400]"></div>
                        <p className="justify-self-start">Diamond City Radio</p>
                    </div>
                    <div onClick={playClassicalRadio} onMouseEnter={playHoverSFX}
                    className="classicalRadioOption font-bold text-[16px] h-[42px] hover:bg-[#14FF00] grid grid-cols-[20%_80%] justify-items-center items-center hover:text-[#032400] cursor-pointer">
                        <div className="squareIcon w-[17px] h-[17px] bg-[#032400]"></div>
                        <p className="justify-self-start">Classical Radio</p>
                    </div>
                    <div onClick={playRadioFreedom} onMouseEnter={playHoverSFX}
                    className="radioFreedomOption font-bold text-[16px] h-[42px] hover:bg-[#14FF00] grid grid-cols-[20%_80%] justify-items-center items-center hover:text-[#032400] cursor-pointer">
                        <div className="squareIcon w-[17px] h-[17px] bg-[#032400]"></div>
                        <p className="justify-self-start">Radio Freedom</p>
                    </div>
                </div>
            </div>
        </div>
    )
}