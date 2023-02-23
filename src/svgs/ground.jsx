import { useDispatch, useSelector } from "react-redux";
import { updateFloor } from "../redux/homepage/homeslice";
const Ground=()=>{
    const dispatch=useDispatch();
    const Groundfloor=useSelector((state)=>state.homeReducer.GroundFloor)


    const G1Handler=()=>{
      dispatch(updateFloor({}))
  
      const time=setTimeout(() => {
        dispatch(updateFloor(Groundfloor[0]))
        clearTimeout(time)
      }, 500);
    }
  
    const G2Handler=()=>{
      dispatch(updateFloor({}))
  
  
      const time=setTimeout(() => {
        dispatch(updateFloor(Groundfloor[1]))
        clearTimeout(time)
      }, 500);
    }
  
    const G3Handler=()=>{
      dispatch(updateFloor({}))
  
  
      const time=setTimeout(() => {
        dispatch(updateFloor(Groundfloor[2]))
        clearTimeout(time)
      }, 500);
    }
  
    const G4Handler=()=>{
      dispatch(updateFloor({}))
      
      const time=setTimeout(() => {
        dispatch(updateFloor(Groundfloor[3]))
        clearTimeout(time)
      }, 500);
    }

    return(
        // mx-auto !w-[81%] mt-[1.25rem] !h-[40%]
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380.13 321.66" className="mx-auto w-full p-2 h-[70vh] sm:h-fit mb:h-fit">
        <defs>
            <style>
            {`
            .cls-1 {
                fill: #f4f2f1;
            }

            .cls-2 {
                fill: #c4b2b4;
            }

            .cls-3 {
                fill: #896c68;
            }

            .cls-4 {
                fill: #58242b;
            }

            .cls-5 {
                font-size: 7.33px;
                fill: #b9938e;
                font-family: Poppins-Regular, Poppins;
            }
            `}
            </style>
        </defs>
        <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
            <polygon class="cls-1" points="4.3 1.94 376.61 1.94 380.13 315.21 0 315.21 4.3 1.94" />
            <rect class="cls-2" x="78.44" y="3.96" width="70.79" height="238.32" />
            <polygon class="cls-3" points="183.39 4.83 183.39 7.04 183.39 26.2 186.16 26.2 186.16 1.96 183.39 1.96 183.39 4.83" />
            <polygon class="cls-3" points="183.39 39.5 183.39 42.68 152.15 42.68 152.15 7.04 149.18 7.04 149.18 42.68 117.94 42.68 117.94 39.5 115.17 39.5 115.17 45.56 149.18 45.56 152.15 45.56 186.16 45.56 186.16 39.5 183.39 39.5" />
            <polygon class="cls-3" points="117.94 26.2 117.94 4.83 118.14 4.83 118.14 1.96 115.17 1.96 115.17 26.2 117.94 26.2" />
            <polygon class="cls-3" points="36.34 4.83 36.34 7.04 36.34 26.2 39.11 26.2 39.11 1.96 36.34 1.96 36.34 4.83" />
            <polygon class="cls-3" points="36.34 39.5 36.34 42.68 5.1 42.68 5.1 7.04 5.08 7.04 5.08 45.56 5.1 45.56 39.11 45.56 39.11 39.5 36.34 39.5" />
            <polygon class="cls-3" points="266.94 26.2 266.94 4.83 267.14 4.83 267.14 1.96 264.18 1.96 264.18 26.2 266.94 26.2" />
            <polygon class="cls-3" points="301.13 35.98 301.15 35.98 301.15 7.04 298.18 7.04 298.18 42.68 266.94 42.68 266.94 39.5 264.18 39.5 264.18 45.56 298.18 45.56 301.13 45.56 301.13 35.98" />
            <path class="cls-3" d="M300.35,4.69H3.13V.79H300.35ZM4.3,3.52H299.18V2H4.3Z" />
            <path class="cls-3" d="M375.44,72H299.18v-3.9h76.26Zm-75.09-1.17h73.91V69.23H300.35Z" />
            <rect class="cls-3" x="145.48" y="233.87" width="10.17" height="13.69" />
            <rect class="cls-3" x="218.22" y="233.87" width="10.17" height="13.69" />
            <rect class="cls-3" x="290.96" y="233.87" width="10.17" height="13.69" />
            <rect class="cls-3" x="290.96" y="116.93" width="10.17" height="13.69" />
            <rect class="cls-3" x="72.74" y="233.87" width="10.17" height="13.69" />
            <polygon class="cls-3" points="228.39 5.47 228.39 0 218.22 0 218.22 5.47 218.22 13.3 228.39 13.3 228.39 5.47" />
            <rect class="cls-3" x="256.16" width="20.73" height="5.48" />
            <rect class="cls-3" x="173.64" width="17.21" height="5.48" />
            <polygon class="cls-3" points="82.91 5.47 82.91 0 72.74 0 72.74 5.47 72.74 13.3 82.91 13.3 82.91 5.47" />
            <polygon class="cls-3" points="145.48 13.3 155.26 13.3 155.26 5.47 161.91 5.47 161.91 0 139.22 0 139.22 5.47 145.48 5.47 145.48 13.3" />
            <rect class="cls-3" x="27.38" width="17.6" height="5.48" />
            <rect class="cls-3" x="110.68" width="16.82" height="5.48" />
            <polygon class="cls-3" points="301.13 13.3 301.13 5.47 301.13 0 288.62 0 288.62 5.47 290.96 5.47 290.96 13.3 301.13 13.3" />
            <polygon class="cls-3" points="9.78 303.09 5.47 303.09 5.47 247.55 9.78 247.55 9.78 233.87 5.47 233.87 5.47 130.62 9.78 130.62 9.78 116.93 5.47 116.93 5.47 13.3 10.17 13.3 10.17 5.47 15.25 5.47 15.25 0 0 0 0 316.78 9.78 316.78 9.78 303.09" />
            <polygon class="cls-3" points="145.48 303.09 145.48 311.3 145.48 316.78 155.65 316.78 155.65 311.3 155.65 308.56 155.65 303.09 145.48 303.09" />
            <polygon class="cls-3" points="228.39 311.3 228.39 305.43 228.39 303.09 218.22 303.09 218.22 308.56 218.22 311.3 218.22 316.78 228.39 316.78 228.39 311.3" />
            <polygon class="cls-3" points="369.96 0 369.96 5.47 369.96 13.3 374.66 13.3 374.66 66.09 369.96 66.09 369.96 79.78 374.66 79.78 374.66 186.55 332.03 186.55 332.03 247.55 343.76 247.55 343.76 242.08 337.5 242.08 337.5 192.02 374.66 192.02 374.66 242.08 368.4 242.08 368.4 247.55 374.66 247.55 374.66 303.09 369.96 303.09 369.96 305.43 369.96 311.3 369.96 316.78 380.13 316.78 380.13 303.09 380.13 247.55 380.13 186.55 380.13 0 369.96 0" />
            <rect class="cls-3" x="298.39" y="66.68" width="2.74" height="177.94" />
            <rect class="cls-3" x="76.26" y="13.1" width="2.74" height="220.57" />
            <rect class="cls-3" x="149" y="17.99" width="2.74" height="220.57" />
            <rect class="cls-3" x="222.13" y="9.58" width="2.74" height="225.07" />
            <rect class="cls-3" x="31.29" y="244.03" width="41.65" height="1.17" />
            <rect class="cls-3" x="9.78" y="241.69" width="41.65" height="1.17" />
            <rect class="cls-3" x="104.42" y="244.03" width="41.65" height="1.17" />
            <rect class="cls-3" x="82.91" y="241.69" width="41.65" height="1.17" />
            <rect class="cls-3" x="176.77" y="244.03" width="41.65" height="1.17" />
            <rect class="cls-3" x="155.26" y="241.69" width="41.65" height="1.17" />
            <rect class="cls-3" x="249.9" y="244.03" width="41.65" height="1.17" />
            <rect class="cls-3" x="300.35" y="243.64" width="68.83" height="0.39" />
            <rect class="cls-3" x="299.96" y="245.21" width="68.83" height="0.39" />
            <rect class="cls-3" x="228.39" y="241.69" width="41.65" height="1.17" />
            <path class="cls-3" d="M37,25A15.29,15.29,0,0,0,21.7,40.09v.58H37.54V39.51H22.9a14.1,14.1,0,0,1,13.47-13.3" />
            <path class="cls-3" d="M184,25a15.29,15.29,0,0,0-15.25,15.06v.58h15.85V39.51H169.94a14.11,14.11,0,0,1,13.48-13.3" />
            <path class="cls-3" d="M117.32,25a15.29,15.29,0,0,1,15.25,15.06v.58H116.73V39.51h14.65a14.11,14.11,0,0,0-13.48-13.3" />
            <path class="cls-3" d="M266.33,25a15.28,15.28,0,0,1,15.24,15.06v.58H265.73V39.51h14.65a14.11,14.11,0,0,0-13.48-13.3" />
            <rect class="cls-3" x="35" y="285.28" width="0.39" height="26.2" />
            <rect class="cls-3" x="46.54" y="285.28" width="0.39" height="26.2" />
            <rect class="cls-3" x="40.67" y="285.28" width="0.39" height="26.2" />
            <rect class="cls-3" x="52.4" y="285.28" width="0.39" height="26.2" />
            <rect class="cls-3" x="58.27" y="285.28" width="0.39" height="26.2" />
            <rect class="cls-3" x="64.14" y="285.28" width="0.39" height="26.2" />
            <rect class="cls-3" x="70" y="285.28" width="0.39" height="26.2" />
            <rect class="cls-3" x="75.87" y="285.28" width="0.39" height="26.2" />
            <rect class="cls-3" x="81.74" y="285.28" width="0.39" height="26.2" />
            <rect class="cls-3" x="87.6" y="285.28" width="0.39" height="26.2" />
            <rect class="cls-3" x="93.47" y="285.28" width="0.39" height="26.2" />
            <rect class="cls-3" x="263" y="285.42" width="0.39" height="26.2" />
            <rect class="cls-3" x="274.54" y="285.42" width="0.39" height="26.2" />
            <rect class="cls-3" x="268.67" y="285.42" width="0.39" height="26.2" />
            <rect class="cls-3" x="280.41" y="285.42" width="0.39" height="26.2" />
            <rect class="cls-3" x="286.27" y="285.42" width="0.39" height="26.2" />
            <rect class="cls-3" x="292.14" y="285.42" width="0.39" height="26.2" />
            <rect class="cls-3" x="298" y="285.42" width="0.39" height="26.2" />
            <rect class="cls-3" x="303.87" y="285.42" width="0.39" height="26.2" />
            <rect class="cls-3" x="309.74" y="285.42" width="0.39" height="26.2" />
            <rect class="cls-3" x="315.6" y="285.42" width="0.39" height="26.2" />
            <rect class="cls-3" x="321.47" y="285.42" width="0.39" height="26.2" />
            <rect class="cls-3" x="326.94" y="285.42" width="0.39" height="26.2" />
            <rect class="cls-3" x="332.81" y="285.42" width="0.39" height="26.2" />
            <rect class="cls-3" x="338.68" y="285.42" width="0.39" height="26.2" />
            <rect class="cls-3" x="344.54" y="285.42" width="0.39" height="26.2" />
            <rect class="cls-3" x="350.41" y="285.42" width="0.39" height="26.2" />
            <path class="cls-3" d="M354.81,47.51a16.82,16.82,0,1,1,17-17H373a18,18,0,1,0-18.18,18.18Z" />
            <path class="cls-3" d="M355.11,46.73h-.21a15.84,15.84,0,1,1,15.94-16v.19l-16.12.39ZM355,15.45a15.45,15.45,0,0,0-.29,30.89l-.4-15.44,16.13-.39A15.5,15.5,0,0,0,355,15.45Z" />
            <path class="cls-3" d="M354.12,31.29a.2.2,0,0,1-.19-.16.2.2,0,0,1,.12-.22l15.25-6.26.15.36-14.27,5.86,15.36-.37v.4l-16.42.39Z" />
            <path class="cls-3" d="M354.77,30.87l-.11,0a.21.21,0,0,1-.07-.24l6.09-14.38.36.15-5.7,13.46L365.7,19.48l.27.28L354.91,30.82A.24.24,0,0,1,354.77,30.87Z" />
            <path class="cls-3" d="M354.91,31.09a.2.2,0,0,1-.18-.12L348.86,16.5l.36-.15,5.49,13.54V15.25h.39V30.9a.19.19,0,0,1-.16.19Z" />
            <path class="cls-3" d="M354.88,31l-.07,0-14.38-6.08.15-.36L354,30.26,343.69,19.91l.27-.28L355,30.69a.2.2,0,0,1-.14.34Z" />
            <path class="cls-3" d="M340.7,36.75l-.14-.36L354.1,30.9H339.46v-.4H355.1a.19.19,0,0,1,.19.16.19.19,0,0,1-.12.22Z" />
            <path class="cls-3" d="M348.74,45.18l-.36-.16,5.7-13.45L343.72,41.92l-.27-.28,11.06-11.06a.21.21,0,0,1,.25,0,.21.21,0,0,1,.07.24Z" />
            <rect class="cls-3" x="301.13" y="94.25" width="73.72" height="0.39" />
            <rect class="cls-3" x="301.13" y="100.12" width="73.72" height="0.39" />
            <rect class="cls-3" x="301.13" y="105.98" width="30.11" height="0.39" />
            <rect class="cls-3" x="301.13" y="111.85" width="30.11" height="0.39" />
            <rect class="cls-3" x="301.13" y="117.72" width="30.11" height="0.39" />
            <rect class="cls-3" x="301.13" y="123.58" width="30.11" height="0.39" />
            <rect class="cls-3" x="301.13" y="129.06" width="30.11" height="0.39" />
            <rect class="cls-3" x="301.13" y="134.92" width="30.11" height="0.39" />
            <rect class="cls-3" x="301.13" y="140.79" width="30.11" height="0.39" />
            <rect class="cls-3" x="301.13" y="146.66" width="30.11" height="0.39" />
            <rect class="cls-3" x="301.13" y="152.52" width="30.11" height="0.39" />
            <rect class="cls-3" x="344.93" y="105.98" width="30.11" height="0.39" />
            <rect class="cls-3" x="344.93" y="111.85" width="30.11" height="0.39" />
            <rect class="cls-3" x="344.93" y="117.72" width="30.11" height="0.39" />
            <rect class="cls-3" x="344.93" y="123.58" width="30.11" height="0.39" />
            <rect class="cls-3" x="344.93" y="129.06" width="30.11" height="0.39" />
            <rect class="cls-3" x="344.93" y="134.92" width="30.11" height="0.39" />
            <rect class="cls-3" x="344.93" y="140.79" width="30.11" height="0.39" />
            <rect class="cls-3" x="344.93" y="146.66" width="30.11" height="0.39" />
            <rect class="cls-3" x="344.93" y="152.52" width="30.11" height="0.39" />
            <path class="cls-3" d="M331.05,154.28a1.51,1.51,0,0,1-1.56-1.56V98.16h17v54.75a.39.39,0,0,1-.39.39.38.38,0,0,1-.39-.39v-54H330.27v53.78a.78.78,0,1,0,.78-.79.38.38,0,0,1-.39-.39.39.39,0,0,1,.39-.39,1.57,1.57,0,0,1,0,3.13Z" />
            <path class="cls-3" d="M93.86,287H5.48a.4.4,0,1,1,0-.79H93.86a.4.4,0,0,1,0,.79Z" />
            <path class="cls-3" d="M374.66,287H263.2a.4.4,0,0,1,0-.79H374.66a.4.4,0,0,1,0,.79Z" />
            <rect class="cls-3" x="189.28" y="285.1" width="30.11" height="0.39" />
            <rect class="cls-3" x="154.09" y="290.96" width="64.92" height="0.39" />
            <rect class="cls-3" x="154.09" y="296.44" width="64.92" height="0.39" />
            <rect class="cls-3" x="154.09" y="302.31" width="64.92" height="0.39" />
            <rect class="cls-3" x="154.09" y="308.17" width="64.92" height="0.39" />
            <rect class="cls-3" x="154.09" y="314.04" width="64.92" height="0.39" />
            <rect class="cls-3" x="154.09" y="319.9" width="64.92" height="0.39" />
            <path class="cls-3" d="M219.2,321.66a1.51,1.51,0,0,1-1.56-1.56V284.32a.39.39,0,0,1,.39-.4.4.4,0,0,1,.39.4V320.1a.78.78,0,1,0,.78-.78.39.39,0,0,1-.39-.39.38.38,0,0,1,.39-.39,1.56,1.56,0,1,1,0,3.12Z" />
            <path class="cls-3" d="M154.09,321.66a1.56,1.56,0,1,1,0-3.12.39.39,0,0,1,.39.39.4.4,0,0,1-.39.39.78.78,0,1,0,0,1.56.73.73,0,0,0,.78-.78V284.32a.39.39,0,1,1,.78,0V320.1A1.52,1.52,0,0,1,154.09,321.66Z" />
            <path class="cls-3" d="M374.66,284.71H218.22a.4.4,0,0,1,0-.79H374.66a.4.4,0,0,1,0,.79Z" />
            <rect class="cls-3" x="5.28" y="285.1" width="369.18" height="0.39" />
            <path class="cls-3" d="M155.26,284.72H3.13a.38.38,0,0,1-.39-.39.39.39,0,0,1,.39-.39H155.26a.39.39,0,0,1,.39.39A.38.38,0,0,1,155.26,284.72Z" />
            <polyline class="cls-3" points="34.81 314.82 145.48 314.82 145.48 316.78 34.81 316.78" />
            <polyline class="cls-3" points="34.81 311.3 145.48 311.3 145.48 313.26 34.81 313.26" />
            <polyline class="cls-3" points="228.39 314.82 351.19 314.82 351.19 316.78 228.39 316.78" />
            <polyline class="cls-3" points="228.39 311.3 351.19 311.3 351.19 313.26 228.39 313.26" />
            <circle class={`cls-4  ${Groundfloor[0]?.sold==true ? 'cursor-not-allowed' :'cursor-pointer'}`} cx="40.28" cy="104.81" r="14.08" onClick={()=>{!Groundfloor[0].sold===true && G1Handler()}} /><text class={`cls-5  ${Groundfloor[0]?.sold==true ? 'cursor-not-allowed' :'cursor-pointer'}`} transform="translate(36.28 107.59)">G1</text>
            <circle class={`cls-4  ${Groundfloor[1]?.sold==true ? 'cursor-not-allowed' :'cursor-pointer'}`} cx="113.8" cy="104.81" r="14.08" onClick={()=>{!Groundfloor[1].sold===true && G2Handler()}} /><text class={`cls-5 ${Groundfloor[1]?.sold==true ? 'cursor-not-allowed' :'cursor-pointer'}`} transform="translate(108.87 107.59)">G2</text>
            <circle class={`cls-4  ${Groundfloor[2]?.sold==true ? 'cursor-not-allowed' :'cursor-pointer'}`} cx="186.15" cy="104.81" r="14.08" onClick={()=>{!Groundfloor[2].sold===true && G3Handler()}} /><text class={`cls-5  ${Groundfloor[2]?.sold==true ? 'cursor-not-allowed' :'cursor-pointer'}`} transform="translate(181.17 107.59)" onClick={()=>{!Groundfloor[2].sold===true && G3Handler()}}>G3</text>
            <circle class={`cls-4  ${Groundfloor[3]?.sold==true ? 'cursor-not-allowed' :'cursor-pointer'}`} cx="264.37" cy="104.81" r="14.08" onClick={()=>{!Groundfloor[3].sold===true && G4Handler()}} /><text class={`cls-5  ${Groundfloor[3]?.sold==true ? 'cursor-not-allowed' :'cursor-pointer'}`} transform="translate(259.24 107.59)" onClick={()=>{!Groundfloor[3].sold===true && G4Handler()}}>G4</text>
            <g id="Padlock">
                <path class="cls-4" d="M117.27,130.82v-2.57a3.44,3.44,0,0,0-6.88,0v2.57a1.28,1.28,0,0,0-1.28,1.29v5.16a1.28,1.28,0,0,0,1.28,1.28h6.88a1.28,1.28,0,0,0,1.29-1.28v-5.16A1.29,1.29,0,0,0,117.27,130.82Zm-6-2.57a2.58,2.58,0,0,1,5.16,0v2.57h-5.16Zm6.45,9a.44.44,0,0,1-.43.43h-6.88a.44.44,0,0,1-.43-.43v-5.16a.43.43,0,0,1,.43-.43h6.88a.43.43,0,0,1,.43.43Zm-3.44-2.89v-1a.43.43,0,0,0-.86,0v1a.85.85,0,0,0-.43.74.86.86,0,0,0,1.72,0A.85.85,0,0,0,114.26,134.38Z" />
            </g>
            </g>
        </g>
    </svg>
    )
}

export default Ground;