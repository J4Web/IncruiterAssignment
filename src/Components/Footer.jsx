import React from 'react'
import logo from '../assets/logo.svg';


function Footer() {
    const divStyle={
        display: "inline-block"
    }
  return (
    <div className='flex justify-center align-middle text-center w-full h-full bg-[#133f7d] '>
      <div style={ divStyle} data-ignore="used only for top most containter width">
  <div class="bg-[#133f7d] flex justify-start items-stretch flex-row w-[1440px] box-border pt-[30.5px] pb-[30px] px-[84px]">
    <div class="flex justify-start items-stretch flex-col w-[34.69%] grow-0 shrink-0 basis-auto box-border pb-[95px]">
      <img src={logo} alt='incruiter' className='w-1/3 ml-24'/>
      <div class="[background:url(.078%2098.6788L155.61%2098.6788C156.043%2098.6788%20156.394%2098.3276%20156.394%2097.8944L156.394%2088.5779C156.394%2088.5349%20156.348%2088.5079%20156.311%2088.5292L154.329%2089.6594C153.18%2089.9159%20153.386%2087.4363%20155.095%2086.3269C155.162%2086.2838%20155.204%2086.2109%20155.204%2086.1318L155.204%2085.1653C155.204%2085.0856%20155.17%2085.0098%20155.111%2084.9566L153.721%2083.7114C153.662%2083.6585%20153.612%2083.5956%20153.575%2083.5256L151.635%2079.8668C151.609%2079.8184%20151.574%2079.7751%20151.529%2079.744C150.816%2079.2514%20150.182%2079.8769%20150.303%2080.4345C150.306%2080.4488%20150.311%2080.4628%20150.316%2080.4762L151.591%2083.4621C151.594%2083.4705%20151.597%2083.4794%20151.598%2083.4885C151.629%2083.7467%20151.328%2083.8265%20151.214%2083.6315L150.015%2080.7492C149.983%2080.673%20149.926%2080.6362%20149.829%2080.6146C149.236%2080.4831%20148.564%2080.8716%20148.76%2081.6396C148.781%2081.722%20148.798%2081.8074%20148.834%2081.8845L150.025%2084.4618C150.098%2084.6405%20149.878%2084.7918%20149.752%2084.655C149.746%2084.6485%20149.741%2084.6407%20149.737%2084.6326L148.676%2082.3689C148.62%2082.2501%20148.499%2082.1698%20148.369%2082.1887C147.916%2082.2545%20147.799%2082.5483%20147.832%2083.2203C147.841%2083.3883%20147.892%2083.5511%20147.972%2083.6992L148.667%2084.9636C148.693%2085.0107%20148.712%2085.041%20148.749%2085.0966C148.928%2085.368%20148.935%2085.3751%20149.243%2085.7707C149.285%2085.8123%20149.342%2085.8493%20149.402%2085.848C150.094%2085.8325%20150.384%2085.9941%20150.446%2086.7655C150.45%2086.8199%20150.492%2086.8646%20150.546%2086.8717C151.666%2087.0184%20151.923%2087.3672%20151.473%2088.5052C151.45%2088.5627%20151.477%2088.628%20151.533%2088.6544C152.02%2088.8843%20152.108%2089.1641%20151.841%2089.89C151.833%2089.9102%20151.82%2089.9281%20151.803%2089.9409L151.339%2090.2879C151.31%2090.3091%20151.294%2090.3424%20151.294%2090.3777L151.294%2097.8944C151.294%2098.3276%20151.645%2098.6788%20152.078%2098.6788Z%27%20fill%3D%27white%27%2F%3E%3C%2Fg%3E%3Cg%20id%3D%27Group%202134%27%3E%3Cg%20id%3D%27Group%202130%27%3E%3Cpath%20id%3D%27Vector\_2%27%20d%3D%27M211.54%2067.1569L204.187%2075.7082L196.672%2067.1795L196.673%2058.9708C196.616%2058.1157%20196.981%2056.2687%20198.896%2055.7213C200.811%2055.1739%20201.746%2055.151%20201.974%2055.208L201.973%2057.7732C201.46%2057.7733%20201.46%2057.9443%20201.46%2058.7993L201.459%2062.9037L204.189%2066.8155L206.754%2062.8819L206.755%2058.7776C206.755%2057.9225%20206.755%2057.7515%20206.242%2057.7515L206.242%2055.1863C206.47%2055.1293%20207.405%2055.152%20209.319%2055.6991C211.234%2056.2462%20211.599%2058.0931%20211.541%2058.9482L211.54%2067.1569Z%27%20fill%3D%27white%27%20stroke%3D%27white%27%20stroke-linecap%3D%27round%27%2F%3E%3Cpath%20id%3D%27Vector\_3%27%20d%3D%27M196.719%2053.0893C196.174%2053.459%20195.733%2053.8783%20195.382%2054.3886C194.917%2055.0644%20194.636%2055.8653%20194.457%2056.8484C194.428%2057.0118%20194.403%2057.421%20194.381%2057.9224C194.358%2058.4448%20194.337%2059.1173%20194.32%2059.8445C194.301%2060.6448%20194.288%2061.5152%20194.284%2062.3282C194.264%2062.2963%20194.244%2062.264%20194.223%2062.2315C193.648%2061.319%20192.921%2060.1777%20192.314%2059.233C190.795%2056.8693%20189.561%2054.3416%20188.778%2051.9916C188.594%2051.4392%20188.214%2049.7887%20188.031%2047.7944C187.848%2045.7973%20187.869%2043.5234%20188.441%2041.6959C189.266%2039.0567%20190.749%2036.738%20193.423%2034.3977C194.731%2033.2529%20198.045%2030.9249%20203.368%2030.758C208.688%2030.5912%20212.167%2032.7511%20213.645%2033.9013C217.036%2036.5392%20218.444%2039.8514%20219.284%2042.7111C220.098%2045.4786%20219.784%2049.9748%20217.934%2054.3467C216.763%2057.1124%20215.126%2060.1581%20213.914%2062.0676L213.914%2056.9361L213.914%2056.8923L213.907%2056.8492C213.801%2056.2508%20213.385%2055.4394%20212.797%2054.6905C212.331%2054.0968%20211.726%2053.5037%20211.016%2053.0569C212.339%2051.6836%20213.066%2050.3749%20213.461%2049.1779C213.899%2047.8471%20213.916%2046.6836%20213.916%2045.7984L213.916%2045.7969C213.905%2040.1477%20209.324%2035.5723%20203.673%2035.5728C198.014%2035.5733%20193.427%2040.162%20193.426%2045.8217C193.425%2047.5633%20194.055%2049.2179%20194.827%2050.5602C195.425%2051.6003%20196.123%2052.4772%20196.719%2053.0893Z%27%20fill%3D%27white%27%20stroke%3D%27white%27%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3Cpath%20id%3D%27%C3%A2%C2%93%C2%87%27%20d%3D%27M259.892%2073.1014L259.892%2069.1378L261.151%2069.1378C261.512%2069.1378%20261.81%2069.1804%20262.046%2069.2656C262.282%2069.3443%20262.456%2069.4722%20262.567%2069.6492C262.679%2069.8197%20262.734%2070.0361%20262.734%2070.2983C262.734%2070.5344%20262.669%2070.7409%20262.538%2070.918C262.413%2071.095%20262.233%2071.2392%20261.997%2071.3507L263.138%2073.1014L262.115%2073.1014L261.22%2071.5868L260.787%2071.5868L260.787%2073.1014L259.892%2073.1014ZM260.787%2070.918L261.131%2070.918C261.348%2070.918%20261.515%2070.8721%20261.633%2070.7803C261.757%2070.6819%20261.82%2070.5311%20261.82%2070.3278C261.82%2070.1443%20261.761%2070.0131%20261.643%2069.9344C261.531%2069.8557%20261.357%2069.8164%20261.121%2069.8164L260.787%2069.8164L260.787%2070.918ZM261.21%2075.3832C260.62%2075.3832%20260.066%2075.2717%20259.548%2075.0488C259.036%2074.8324%20258.584%2074.5308%20258.191%2074.1439C257.804%2073.7505%20257.499%2073.2981%20257.276%2072.7867C257.059%2072.2687%20256.951%2071.7146%20256.951%2071.1245C256.951%2070.5344%20257.059%2069.9836%20257.276%2069.4722C257.499%2068.9542%20257.804%2068.5018%20258.191%2068.1149C258.584%2067.7215%20259.036%2067.4166%20259.548%2067.2002C260.066%2066.9773%20260.62%2066.8658%20261.21%2066.8658C261.8%2066.8658%20262.351%2066.9773%20262.862%2067.2002C263.38%2067.4166%20263.833%2067.7215%20264.22%2068.1149C264.613%2068.5018%20264.918%2068.9542%20265.134%2069.4722C265.357%2069.9836%20265.469%2070.5344%20265.469%2071.1245C265.469%2071.7146%20265.357%2072.2687%20265.134%2072.7867C264.918%2073.2981%20264.613%2073.7505%20264.22%2074.1439C263.833%2074.5308%20263.38%2074.8324%20262.862%2075.0488C262.351%2075.2717%20261.8%2075.3832%20261.21%2075.3832ZM261.21%2074.5078C261.682%2074.5078%20262.121%2074.4226%20262.528%2074.2521C262.934%2074.0751%20263.292%2073.8325%20263.6%2073.5243C263.915%2073.2096%20264.157%2072.849%20264.328%2072.4424C264.505%2072.0293%20264.593%2071.59%20264.593%2071.1245C264.593%2070.6524%20264.505%2070.2131%20264.328%2069.8066C264.157%2069.4%20263.915%2069.0427%20263.6%2068.7345C263.292%2068.4198%20262.931%2068.1772%20262.518%2068.0067C262.112%2067.8297%20261.676%2067.7412%20261.21%2067.7412C260.738%2067.7412%20260.299%2067.8297%20259.892%2068.0067C259.486%2068.1772%20259.125%2068.4198%20258.81%2068.7345C258.502%2069.0427%20258.259%2069.4033%20258.082%2069.8164C257.912%2070.2229%20257.827%2070.659%20257.827%2071.1245C257.827%2071.5966%20257.912%2072.0359%20258.082%2072.4424C258.259%2072.849%20258.502%2073.2096%20258.81%2073.5243C259.125%2073.8325%20259.486%2074.0751%20259.892%2074.2521C260.305%2074.4226%20260.744%2074.5078%20261.21%2074.5078Z%27%20fill%3D%27white%27%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3Cdefs%3E%3CclipPath%20id%3D%27clip0\_1\_22500%27%3E%3Crect%20width%3D%271263.01%27%20height%3D%27558.7%27%20fill%3D%27white%27%20transform%3D%27translate%2888.5077%2030.2474%29%27%2F%3E%3C%2FclipPath%3E%3CclipPath%20id%3D%27clip1\_1\_22500%27%3E%3Crect%20width%3D%27305.006%27%20height%3D%27137.574%27%20fill%3D%27white%27%20transform%3D%27translate%2888.5077%2030.2474%29%27%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3C%2Fsvg%3E)] bg-cover bg-no-repeat h-[70px] grow-0 shrink-0 basis-auto box-border pt-[20px] px-[5px]">
        <div class="box-border w-1 h-1 text-white flex">
          <svg viewBox="0 0 206.3356 64.7166" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Group 2132" xmlns="http://www.w3.org/2000/svg">
              {/* <g id="Vector_4"><path d="M203.41,62.0693l0.8,-4.7979l0.799,-0.0001l0.799,4.7978l-1.279,1.7593z" fill="currentColor" /></g>
              <circle id="Ellipse 174" cx="1.2995679999999998" cy="1.2995679999999998" r="0.799568" transform="" fill="currentColor" /> */}
            </g>
          </svg>
        </div>
      </div>
      <div class="flex justify-start items-stretch flex-col grow-0 shrink-0 basis-auto box-border mt-[7.75px]">
        <div class="grow-0 shrink-0 basis-auto box-border px-3">
  </div>
        <p class="box-border [font-family:Manrope] text-sm font-normal text-[white] shrink-0 basis-auto mt-2.5 px-[5px]">Building the hiring solutions for the next billions</p>
        <div class="flex justify-start items-stretch flex-col gap-[13px] grow-0 shrink-0 basis-auto box-border mt-[18px]">
          <div class="flex justify-start items-start flex-row grow-0 shrink-0 basis-auto box-border">
            <div class="grow-0 shrink-0 basis-auto box-border w-8 h-8 flex">
              <svg viewBox="0 0 32 32" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="Vector_5" d="M15.99805,1.86145c-2.9165,0.004 -5.7124,1.165 -7.7743,3.227c-2.0619,2.063 -3.2215,4.859 -3.2244,7.776c-0.0031,2.383 0.7759,4.702 2.2173,6.6c0,0 0.3001,0.395 0.3491,0.452l8.4374,9.947l8.4375,-9.955c0.044,-0.053 0.345,-0.447 0.345,-0.447l0.001,-0.003c1.44,-1.898 2.218,-4.216 2.214,-6.598c-0.004,-2.917 -1.165,-5.713 -3.227,-7.775c-2.063,-2.061 -4.859,-3.221 -7.7756,-3.224zM16.00075,16.86245c-0.7912,0 -1.5646,-0.234 -2.2225,-0.674c-0.658,-0.439 -1.1708,-1.064 -1.4737,-1.795c-0.3029,-0.731 -0.3823,-1.535 -0.2281,-2.311c0.1543,-0.776 0.5351,-1.489 1.0945,-2.048c0.5593,-0.56 1.272,-0.941 2.048,-1.096c0.2491,-0.049 0.5011,-0.075 0.7527,-0.076c0.0194,-0.001 0.0387,-0.001 0.058,0c0.513,0.003 1.022,0.106 1.501,0.304c0.457,0.189 0.874,0.461 1.229,0.8c0.051,0.048 0.101,0.098 0.149,0.15c0.153,0.161 0.292,0.336 0.417,0.523c0.44,0.657 0.674,1.431 0.675,2.222c-0.002,1.061 -0.423,2.077 -1.173,2.827c-0.75,0.75 -1.766,1.172 -2.8269,1.174z" fill="white" xmlns="http://www.w3.org/2000/svg" /></svg>
            </div>
            <p class="max-w-[267px] box-border [font-family:Manrope] text-sm font-normal leading-6 text-[white] grow-0 shrink-0 basis-auto ml-2.5 pt-0.5">
              <span class="[font-family:Manrope] text-base font-bold">
                US Office
                <br />
              </span>
              <span>7924 Preston Rd, Plano, TX 75024, United States</span>
            </p>
          </div>
          <div class="flex justify-start items-start flex-row grow-0 shrink-0 basis-auto box-border">
            <div class="grow-0 shrink-0 basis-auto box-border w-8 h-8 flex">
              <svg viewBox="0 0 32 32" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="Vector_6" d="M15.99805,1.86245c-2.9165,0.004 -5.7124,1.165 -7.7743,3.228c-2.0619,2.062 -3.2215,4.859 -3.2244,7.775c-0.0031,2.384 0.7759,4.702 2.2173,6.6c0,0 0.3001,0.395 0.3491,0.452l8.4374,9.947l8.4375,-9.955c0.044,-0.053 0.345,-0.447 0.345,-0.447l0.001,-0.003c1.44,-1.898 2.218,-4.216 2.214,-6.598c-0.004,-2.916 -1.165,-5.712 -3.227,-7.774c-2.063,-2.062 -4.859,-3.222 -7.7756,-3.225zM16.00075,16.86345c-0.7912,0.001 -1.5646,-0.234 -2.2225,-0.673c-0.658,-0.44 -1.1708,-1.064 -1.4737,-1.795c-0.3029,-0.731 -0.3823,-1.536 -0.2281,-2.312c0.1543,-0.776 0.5351,-1.488 1.0945,-2.048c0.5593,-0.559 1.272,-0.941 2.0479,-1.095c0.2492,-0.05 0.5012,-0.075 0.7528,-0.077c0.0194,0 0.0387,0 0.058,0c0.513,0.004 1.022,0.106 1.501,0.304c0.457,0.19 0.874,0.462 1.229,0.8c0.051,0.049 0.101,0.099 0.149,0.15c0.153,0.162 0.292,0.337 0.417,0.523c0.44,0.658 0.674,1.431 0.675,2.222c-0.002,1.061 -0.423,2.078 -1.173,2.828c-0.75,0.75 -1.766,1.172 -2.8269,1.173z" fill="white" xmlns="http://www.w3.org/2000/svg" /></svg>
            </div>
            <p class="max-w-[267px] box-border [font-family:Manrope] text-sm font-normal leading-6 text-[white] grow-0 shrink-0 basis-auto ml-2.5 pt-[2.25px]">
              <span class="[font-family:Manrope] text-base font-bold">
                India Office
                <br />
              </span>
              <span>Incruiter India Private Limited, 464, 2nd Floor, Beginest Harbour - 4, Shri Krishna Temple Road, Stage 1, Indiranagar, Bengaluru, Karnataka - 560038</span>
            </p>
          </div>
          <div class="flex justify-start items-start flex-row gap-[2.5px] grow-0 shrink-0 basis-auto box-border mt-0.5 px-1">
            <div class="grow-0 shrink-0 basis-auto box-border w-6 h-6 flex">
              <svg viewBox="0 0 24 24" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="Vector_7" d="M22.59765,18.2317l-5.021,-4.564c-0.237,-0.216 -0.549,-0.331 -0.87,-0.321c-0.32,0.01 -0.625,0.145 -0.848,0.375l-2.955,3.039c-0.7113,-0.135 -2.1415,-0.581 -3.6139,-2.049c-1.4725,-1.473 -1.9186,-2.907 -2.0508,-3.613l3.0364,-2.958c0.2301,-0.223 0.3644,-0.527 0.3742,-0.848c0.0099,-0.32 -0.1054,-0.632 -0.3215,-0.869l-4.5643,-5.019c-0.2161,-0.238 -0.5164,-0.382 -0.8372,-0.402c-0.3208,-0.02 -0.6367,0.086 -0.8807,0.295l-2.6796,2.299c-0.2135,0.214 -0.3409,0.5 -0.358,0.802c-0.0185,0.308 -0.3704,7.622 5.3019,13.295c4.9484,4.945 11.1455,5.306 12.8525,5.306c0.25,0 0.403,-0.008 0.443,-0.01c0.302,-0.017 0.587,-0.145 0.801,-0.36l2.296,-2.682c0.21,-0.243 0.317,-0.559 0.297,-0.879c-0.02,-0.321 -0.164,-0.621 -0.402,-0.837z" fill="white" xmlns="http://www.w3.org/2000/svg" /></svg>
            </div>
            <div class="flex justify-start items-stretch flex-col grow-0 shrink-0 basis-auto box-border ml-[9.5px]">
              <p class="box-border [font-family:Manrope] text-sm font-bold text-[white] grow-0 shrink-0 basis-auto pr-[13.5px]">US</p>
              <p class="grow-0 shrink-0 basis-auto box-border [font-family:Manrope] text-sm font-bold text-justify text-[white] mt-[22px]">India</p>
            </div>
               <div class="self-center grow-0 shrink-0 basis-auto box-border h-[19px] border-l-[0.8px] border-l-[white] border-solid"></div>
            <div class="grow-0 shrink-0 basis-auto box-border pt-[2.25px]">
                 <div class="box-border h-[19px] border-l-[0.8px] border-l-[white] border-solid"></div>
            </div>
            <div class="flex justify-center items-stretch flex-col grow-0 shrink-0 basis-auto box-border">
              <p class="grow-0 shrink-0 basis-auto box-border [font-family:Manrope] text-sm font-medium text-justify text-[white]">(+1) 080-47187100</p>
              <p class="grow-0 shrink-0 basis-auto box-border [font-family:Manrope] text-sm font-medium text-justify text-[white] mt-[15px]">(+91) 080-47187100</p>
            </div>
          </div>
          <div class="flex justify-start items-start flex-row grow-0 shrink-0 basis-auto box-border mt-0.5 px-1">
            <div class="grow-0 shrink-0 basis-auto box-border w-6 h-6 flex">
              <svg viewBox="0 0 24 24" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="Vector_8" d="M3.4296,4.241l17.138,-0.003c1.617,0 2.432,0.763 2.432,2.315l0.002,10.891c0,1.539 -0.814,2.315 -2.431,2.315l-17.1382,0.003c-1.6168,0.001 -2.4318,-0.775 -2.432,-2.314l-0.002,-10.891c-0.0003,-1.552 0.8144,-2.316 2.4312,-2.316zM11.9942,15.363l8.7164,-7.154c0.31,-0.259 0.556,-0.854 0.168,-1.384c-0.375,-0.53 -1.061,-0.543 -1.513,-0.22l-7.3721,4.994l-7.3606,-4.991c-0.4527,-0.323 -1.1382,-0.31 -1.5132,0.22c-0.388,0.531 -0.1421,1.125 0.1684,1.384z" fill="white" xmlns="http://www.w3.org/2000/svg" /></svg>
            </div>
            <p class="grow-0 shrink-0 basis-auto box-border [font-family:Manrope] text-sm font-normal text-[white] ml-3.5">contact@incruiter.com</p>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-start items-stretch flex-col w-[65.31%] grow-0 shrink-0 basis-auto box-border pt-[29.5px] px-[15px]">
      <div class="flex justify-start items-center flex-col gap-[15px] grow-0 shrink-0 basis-auto box-border -mr-2.5 pl-[13.5px]">
        <div class="flex justify-between items-center flex-row gap-[178px] self-stretch grow-0 shrink-0 basis-auto box-border pr-[33px]">
          <p class="grow-0 shrink-0 basis-auto box-border [font-family:Manrope] text-[25px] font-semibold text-[white]">Our Products</p>
          <p class="grow-0 shrink-0 basis-auto box-border [font-family:Manrope] text-[25px] font-semibold text-[white]">Website Pages</p>
          <p class="grow-0 shrink-0 basis-auto box-border [font-family:Manrope] text-[25px] font-semibold text-[white]">Policies</p>
        </div>
        <div class="flex justify-center items-stretch flex-col gap-[15px] self-stretch grow-0 shrink-0 basis-auto box-border">
          <div class="flex justify-start items-stretch flex-row grow-0 shrink-0 basis-auto box-border">
            <div class="flex justify-center items-stretch flex-col w-[40.23%] grow-0 shrink-0 basis-auto box-border">
              <p class="box-border text-sm font-normal text-[white]" style={{
                fontFamily: "Manrope"
              }}>Interview as a Service</p>
            </div>
            <div class="flex justify-center items-stretch flex-col w-[42.10%] grow-0 shrink-0 basis-auto box-border px-[15px]">
              <p class="box-border [font-family:Manrope] text-sm font-normal text-[white]">Home</p>
            </div>
            <div class="flex justify-center items-stretch flex-col w-[17.67%] grow-0 shrink-0 basis-auto box-border px-[15px]">
              <p class="box-border [font-family:Manrope] text-sm font-normal text-[white]">Privacy Policy</p>
            </div>
          </div>
          <div class="flex justify-start items-stretch flex-row grow-0 shrink-0 basis-auto box-border">
            <div class="flex justify-center items-stretch flex-col w-[40.23%] grow-0 shrink-0 basis-auto box-border">
              <p class="box-border text-sm font-normal text-[white]" style={{
                fontFamily: "Inter"
              }}>Video Interview Portal</p>
            </div>
            <div class="flex justify-center items-stretch flex-col w-[42.10%] grow-0 shrink-0 basis-auto box-border px-[15px]">
              <p class="box-border [font-family:Manrope] text-sm font-normal text-[white]">About Us</p>
            </div>
            <div class="flex justify-center items-stretch flex-col w-[17.67%] grow-0 shrink-0 basis-auto box-border px-[15px]">
              <p class="box-border [font-family:Manrope] text-sm font-normal text-[white]">Terms &amp; Conditions</p>
            </div>
          </div>
          <div class="flex justify-start items-stretch flex-row grow-0 shrink-0 basis-auto box-border">
            <div class="flex justify-center items-stretch flex-col w-[40.23%] grow-0 shrink-0 basis-auto box-border">
              <p class="box-border text-sm font-normal text-[white]" style={{
                fontFamily: "Manrope"
              }}>Interview Feedback Service</p>
            </div>
            <div class="flex justify-center items-stretch flex-col w-[42.10%] grow-0 shrink-0 basis-auto box-border px-[15px]">
              <p class="box-border [font-family:Manrope] text-sm font-normal text-[white]">Partner with InCruiter</p>
            </div>
               <div class="flex justify-center items-stretch flex-col w-[17.67%] grow-0 shrink-0 basis-auto box-border px-[15px]"></div>
          </div>
          <div class="flex justify-start items-stretch flex-row grow-0 shrink-0 basis-auto box-border">
            <div class="flex justify-center items-stretch flex-col w-[40.23%] grow-0 shrink-0 basis-auto box-border">
              <p class="box-border text-sm font-normal text-[white]" style={{
                fontFamily: "Manrope"
              }}>Exit Interview Services</p>
            </div>
            <div class="flex justify-center items-stretch flex-col w-[42.10%] grow-0 shrink-0 basis-auto box-border px-[15px]">
              <p class="box-border [font-family:Manrope] text-sm font-normal text-[white]">Blogs</p>
            </div>
               <div class="flex justify-center items-stretch flex-col w-[17.67%] grow-0 shrink-0 basis-auto box-border px-[15px]"></div>
          </div>
          <div class="flex justify-start items-stretch flex-row grow-0 shrink-0 basis-auto box-border">
            <div class="flex justify-center items-stretch flex-col w-[40.23%] grow-0 shrink-0 basis-auto box-border">
              <p class="box-border text-sm font-normal text-[white]" style={{
                fontFamily: "Manrope"
              }}>Pre-vetted Resourcess</p>
            </div>
            <div class="flex justify-center items-stretch flex-col w-[42.10%] grow-0 shrink-0 basis-auto box-border px-[15px]">
              <p class="box-border [font-family:Manrope] text-sm font-normal text-[white]">Careers</p>
            </div>
               <div class="flex justify-center items-stretch flex-col w-[17.67%] grow-0 shrink-0 basis-auto box-border px-[15px]"></div>
          </div>
        </div>
        <p class="grow-0 shrink-0 basis-auto box-border [font-family:Manrope] text-sm font-normal text-[white]">AI JD Creator</p>
        <p class="grow-0 shrink-0 basis-auto box-border [font-family:Manrope] text-sm font-normal text-[white]">JD to CV Match</p>
      </div>
      <div class="flex  mt-[166px] text-center justify-center flex-col">
        <div class="flex items-stretch flex-row gap-[19px] h-[41px] grow-0 shrink-0 basis-auto box-border pl-[100px] pr-12">
          <div class="grow-0 shrink-0 basis-auto box-border">
            <img class="w-[41px] h-[41px] max-w-[initial] box-border block content-[url('data:image/svg+xml;charset=utf8,%3Csvg%20viewBox%3D%27639.6380%20523.3490%2041.0030%2041.0020%27%20fill%3D%27none%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20id%3D%27a4ec79b5%27%20x%3D%270%27%20y%3D%270%27%3E%3Cg%20id%3D%27Footer%27%3E%3Cg%20id%3D%27Frame%203335%27%20clip-path%3D%27url%28%23clip0\_1\_22500%29%27%3E%3Cg%20id%3D%27Frame%201171274976%27%3E%3Cg%20id%3D%27Social%27%3E%3Cg%20id%3D%27Social\_2%27%3E%3Cg%20id%3D%27Background%27%20filter%3D%27url%28%23filter0\_d\_1\_22500%29%27%3E%3Cpath%20fill-rule%3D%27evenodd%27%20clip-rule%3D%27evenodd%27%20d%3D%27M660.14%20563.851C671.186%20563.851%20680.141%20554.896%20680.141%20543.85C680.141%20532.804%20671.186%20523.849%20660.14%20523.849C649.093%20523.849%20640.138%20532.804%20640.138%20543.85C640.138%20554.896%20649.093%20563.851%20660.14%20563.851Z%27%20fill%3D%27white%27%2F%3E%3C%2Fg%3E%3Cpath%20id%3D%27Facebook%20Icon%27%20fill-rule%3D%27evenodd%27%20clip-rule%3D%27evenodd%27%20d%3D%27M664.944%20536.094C664.319%20535.903%20663.601%20535.775%20662.945%20535.775C662.133%20535.775%20660.385%20536.318%20660.385%20537.371L660.385%20539.892L664.538%20539.892L664.538%20544.137L660.385%20544.137L660.385%20555.851L656.2%20555.851L656.2%20544.137L654.139%20544.137L654.139%20539.892L656.2%20539.892L656.2%20537.754C656.2%20534.53%20657.637%20531.849%20661.103%20531.849C662.29%20531.849%20664.413%20531.913%20665.568%20532.328L664.944%20536.094Z%27%20fill%3D%27%23133F7D%27%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3Cdefs%3E%3Cfilter%20id%3D%27filter0\_d\_1\_22500%27%20x%3D%27630.138%27%20y%3D%27515.848%27%20width%3D%2760.0037%27%20height%3D%2760.0037%27%20filterUnits%3D%27userSpaceOnUse%27%20color-interpolation-filters%3D%27sRGB%27%3E%3CfeFlood%20flood-opacity%3D%270%27%20result%3D%27BackgroundImageFix%27%2F%3E%3CfeColorMatrix%20in%3D%27SourceAlpha%27%20type%3D%27matrix%27%20values%3D%270%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%27%20result%3D%27hardAlpha%27%2F%3E%3CfeOffset%20dy%3D%272%27%2F%3E%3CfeGaussianBlur%20stdDeviation%3D%275%27%2F%3E%3CfeColorMatrix%20type%3D%27matrix%27%20values%3D%270%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.1%200%27%2F%3E%3CfeBlend%20mode%3D%27normal%27%20in2%3D%27BackgroundImageFix%27%20result%3D%27effect1\_dropShadow\_1\_22500%27%2F%3E%3CfeBlend%20mode%3D%27normal%27%20in%3D%27SourceGraphic%27%20in2%3D%27effect1\_dropShadow\_1\_22500%27%20result%3D%27shape%27%2F%3E%3C%2Ffilter%3E%3CclipPath%20id%3D%27clip0\_1\_22500%27%3E%3Crect%20width%3D%271263.01%27%20height%3D%27558.7%27%20fill%3D%27white%27%20transform%3D%27translate%2888.5077%2030.2474%29%27%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3C%2Fsvg%3E')]" />
          </div>
          <div class="[background:url(data:image/svg+xml;charset=utf8,%3Csvg%20viewBox%3D%27699.6420%20523.3490%2041.0020%2041.0020%27%20x%3D%270%27%20y%3D%270%27%20fill%3D%27none%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%3Cdefs%3E%3Cfilter%20id%3D%27filter1\_d\_1\_22500%27%20x%3D%27690.141%27%20y%3D%27515.848%27%20width%3D%2760.0037%27%20height%3D%2760.0037%27%20filterUnits%3D%27userSpaceOnUse%27%20color-interpolation-filters%3D%27sRGB%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%3CfeFlood%20flood-opacity%3D%270%27%20result%3D%27BackgroundImageFix%27%2F%3E%3CfeColorMatrix%20in%3D%27SourceAlpha%27%20type%3D%27matrix%27%20values%3D%270%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%27%20result%3D%27hardAlpha%27%2F%3E%3CfeOffset%20dy%3D%272%27%2F%3E%3CfeGaussianBlur%20stdDeviation%3D%275%27%2F%3E%3CfeColorMatrix%20type%3D%27matrix%27%20values%3D%270%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.1%200%27%2F%3E%3CfeBlend%20mode%3D%27normal%27%20in2%3D%27BackgroundImageFix%27%20result%3D%27effect1\_dropShadow\_1\_22500%27%2F%3E%3CfeBlend%20mode%3D%27normal%27%20in%3D%27SourceGraphic%27%20in2%3D%27effect1\_dropShadow\_1\_22500%27%20result%3D%27shape%27%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3Cg%20id%3D%27Background\_2%27%20filter%3D%27url%28%23filter1\_d\_1\_22500%29%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%3Cpath%20fill-rule%3D%27evenodd%27%20clip-rule%3D%27evenodd%27%20d%3D%27M720.143%20563.851C731.19%20563.851%20740.144%20554.896%20740.144%20543.85C740.144%20532.804%20731.19%20523.849%20720.143%20523.849C709.097%20523.849%20700.142%20532.804%20700.142%20543.85C700.142%20554.896%20709.097%20563.851%20720.143%20563.851Z%27%20fill%3D%27white%27%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E)] bg-cover bg-no-repeat flex justify-center items-center flex-col w-10 grow-0 shrink-0 basis-auto box-border">
            <div class="grow-0 shrink-0 basis-auto box-border w-5 h-5 text-[#133f7d] flex">
              <svg viewBox="0 0 20.001 20.002" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <clipPath id="clip8_1_22500" xmlns="http://www.w3.org/2000/svg"><rect width="20" height="20" fill="white" transform="translate(0, 0)" /></clipPath>
                </defs>
                <g id="instagram 1" clip-path="url(#clip8_1_22500)" xmlns="http://www.w3.org/2000/svg">
                  <g id="Group">
                    <g id="Group_2"><path id="Vector_9" d="M17.071,0h-14.142c-1.615,0 -2.929,1.315 -2.929,2.93v14.142c0,1.616 1.314,2.93 2.929,2.93h14.142c1.616,0 2.93,-1.314 2.93,-2.93v-14.142c0,-1.615 -1.314,-2.93 -2.93,-2.93zM18.829,17.072c0,0.969 -0.789,1.758 -1.758,1.758h-14.142c-0.969,0 -1.757,-0.789 -1.757,-1.758v-14.142c0,-0.969 0.788,-1.758 1.757,-1.758h14.142c0.969,0 1.758,0.789 1.758,1.758z" fill="currentColor" /></g>
                    <g id="Group_3"><path id="Vector_10" d="M16.446,2.383c-0.646,0 -1.172,0.526 -1.172,1.172c0,0.646 0.526,1.172 1.172,1.172c0.646,0 1.172,-0.526 1.172,-1.172c0,-0.646 -0.526,-1.172 -1.172,-1.172z" fill="currentColor" /></g>
                    <g id="Group_4"><path id="Vector_11" d="M10,4.727c-2.908,0 -5.273,2.366 -5.273,5.274c0,2.908 2.365,5.274 5.273,5.274c2.908,0 5.274,-2.366 5.274,-5.274c0,-2.908 -2.366,-5.274 -5.274,-5.274zM10,14.103c-2.261,0 -4.101,-1.84 -4.101,-4.102c0,-2.262 1.84,-4.102 4.101,-4.102c2.262,0 4.102,1.84 4.102,4.102c0,2.262 -1.84,4.102 -4.102,4.102z" fill="currentColor" /></g>
                  </g>
                </g>
              </svg>
            </div>
          </div>
          <div class="[background:url(data:image/svg+xml;charset=utf8,%3Csvg%20viewBox%3D%27759.6460%20523.3490%2041.0020%2041.0020%27%20x%3D%270%27%20y%3D%270%27%20fill%3D%27none%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%3Cdefs%3E%3Cfilter%20id%3D%27filter2\_d\_1\_22500%27%20x%3D%27750.145%27%20y%3D%27515.848%27%20width%3D%2760.0037%27%20height%3D%2760.0037%27%20filterUnits%3D%27userSpaceOnUse%27%20color-interpolation-filters%3D%27sRGB%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%3CfeFlood%20flood-opacity%3D%270%27%20result%3D%27BackgroundImageFix%27%2F%3E%3CfeColorMatrix%20in%3D%27SourceAlpha%27%20type%3D%27matrix%27%20values%3D%270%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%27%20result%3D%27hardAlpha%27%2F%3E%3CfeOffset%20dy%3D%272%27%2F%3E%3CfeGaussianBlur%20stdDeviation%3D%275%27%2F%3E%3CfeColorMatrix%20type%3D%27matrix%27%20values%3D%270%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.1%200%27%2F%3E%3CfeBlend%20mode%3D%27normal%27%20in2%3D%27BackgroundImageFix%27%20result%3D%27effect1\_dropShadow\_1\_22500%27%2F%3E%3CfeBlend%20mode%3D%27normal%27%20in%3D%27SourceGraphic%27%20in2%3D%27effect1\_dropShadow\_1\_22500%27%20result%3D%27shape%27%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3Cg%20id%3D%27Background\_3%27%20filter%3D%27url%28%23filter2\_d\_1\_22500%29%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%3Cpath%20fill-rule%3D%27evenodd%27%20clip-rule%3D%27evenodd%27%20d%3D%27M780.147%20563.851C791.193%20563.851%20800.148%20554.896%20800.148%20543.85C800.148%20532.804%20791.193%20523.849%20780.147%20523.849C769.101%20523.849%20760.146%20532.804%20760.146%20543.85C760.146%20554.896%20769.101%20563.851%20780.147%20563.851Z%27%20fill%3D%27white%27%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E)] bg-cover bg-no-repeat flex justify-center items-center flex-col w-10 grow-0 shrink-0 basis-auto box-border">
            <div class="grow-0 shrink-0 basis-auto box-border w-8 h-8 text-[#133f7d] flex">
              <svg viewBox="0 0 32 32" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Group 1000003624" xmlns="http://www.w3.org/2000/svg">
                  <rect id="Rectangle 3467696" x="5.709599999999909" y="4.499000000000024" width="20.0012" height="21.0013" fill="currentColor" />
                  <path id="Vector_12" d="M25.5446,2.999h-18.084c-3.567,0 -3.251,0.392 -3.251,3.959v18.084c0,3.567 -1.931,3.959 1.636,3.959h18.407c3.568,0 3.958,-0.392 3.958,-3.959v-18.084c0,-3.567 0.902,-3.959 -2.666,-3.959zM10.0436,25.042h-3.875v-14.209h3.875zM8.1056,9.195c-1.247,0 -2.26,-1.02 -2.26,-2.278c0,-1.259 1.013,-2.279 2.26,-2.279c1.248,0 2.261,1.02 2.261,2.279c0,1.258 -1.011,2.278 -2.261,2.278zM25.5446,25.042h-3.875v-7.239c0,-4.35 -5.167,-4.021 -5.167,0v7.239h-3.875v-14.209h3.875v2.28c1.803,-3.34 9.042,-3.587 9.042,3.198z" fill="white" />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <p class="[font-family:Manrope] font-normal text-gray-300 mt-11 inline-block">© 2022 InCruiter India Private Limited. All rights reserved</p>
      </div>
    </div>
  </div>
</div>

</div>
  )
}

export default Footer