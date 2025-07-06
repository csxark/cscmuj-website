import React from "react";
import "@/app/globals.css";
import Person from "../components/Person";
import h1 from "@/assets/team/behindTheScene.svg";
import h2 from "@/assets/team/facultyCoordinator.svg";
import h21 from "@/assets/team/facultyCoordinatorStraight.svg";
import h3 from "@/assets/team/dsw.svg";
import h4 from "@/assets/team/executive.svg";
import h5 from "@/assets/team/core.svg";
import h6 from "@/assets/team/deputyCore.svg";

//Faculties
import UmaShankar from "@/assets/team/people/FacultyCoordinator/DrUmashankarRawat.jpg";
import Rohit from "@/assets/team/people/FacultyCoordinator/DrRohitBhatnagar.jpg";
import AmitKumarBairwa from "@/assets/team/people/FacultyCoordinator/AmitKumarBairwa.jpg";
import Sanchit from "@/assets/team/people/DSW/SanchitAnand.jpg";

//Execs
import kuber from "@/assets/team/people/ecs/KuberChhabra.png";
import ganesh from "@/assets/team/people/ecs/GaneshKotwade.png";
import arnab from "@/assets/team/people/ecs/ArnabRoy.png";
import rishabh from "@/assets/team/people/ecs/RishabhPandey.png";
import jatin from "@/assets/team/people/ecs/JatinSangewar.png";
import pranav from "@/assets/team/people/ecs/PranavUpadhyay.png";
import himank from "@/assets/team/people/ecs/HimankSingh.png";
import aditya from "@/assets/team/people/ecs/AdityaAgrawal.png";
import anhad from "@/assets/team/people/ecs/Anhad.png";

//Heads
import PragatiJain from "@/assets/team/people/heads/PragatiJain.png";
import UtkarshVerma from "@/assets/team/people/heads/UtkarshVerma.png";
import AvichalKhanna from "@/assets/team/people/heads/AvichalKhanna.png";
import TanishaSChopde from "@/assets/team/people/heads/TanishaChopde.png";
import ShivPratapSuryavanshi from "@/assets/team/people/heads/ShivPratapSuryavanshi.png";
import ShreyaChauhan from "@/assets/team/people/heads/ShreyaChauhan.png";
import SuhaniDeep from "@/assets/team/people/heads/SuhaniDeep.png";
import RandeepSinghChauhan from "@/assets/team/people/heads/RandeepSinghChauhan.png";
import KashikaBhardwaj from "@/assets/team/people/heads/KashikaBhardwaj.png";
import AmbujakshMishra from "@/assets/team/people/heads/AmbujakshMishra.png";

//Joint Heads
import AdityaKhanna from "@/assets/team/people/joint/AdityaKhanna.png";
import CheedellaSudipta from "@/assets/team/people/joint/CheedellaSudipta.png";
import ShreyaSharma from "@/assets/team/people/joint/ShreyaSharma.png";
import NishchalKapadia from "@/assets/team/people/joint/NishchalKapadia.png";
import AmbikaSeth from "@/assets/team/people/joint/AmbikaSeth.png";
import AbhinavTrikha from "@/assets/team/people/joint/AbhinavTrikha.png";
import BhoomiKothari from "@/assets/team/people/joint/BhoomiKothari.png";
import SuyashPandey from "@/assets/team/people/joint/SuyashPandey.png";
import AstitvaSrivastava from "@/assets/team/people/joint/AstitvaSrivastava.png";
import MihirSinha from "@/assets/team/people/joint/MihirSinha.png";
import AnantThapa from "@/assets/team/people/joint/AnantThapa.png";
import ChaitanyaYadav from "@/assets/team/people/joint/ChaitanyaYadav.jpeg";
import SimranMalhotra from "@/assets/team/people/joint/SimranMalhotra.png";
import BhumijaGoswami from "@/assets/team/people/joint/BhumijaGoswami.png";
import VrindaGoel from "@/assets/team/people/joint/VrindaGoel.png";
import PranavBharara from "@/assets/team/people/joint/PranavBharara.png";
import SarthakGupta from "@/assets/team/people/joint/SarthakGupta.jpg";
import RugvedGujar from "@/assets/team/people/joint/RugvedGujar.png";
import HarshitRajSingh from "@/assets/team/people/joint/HarshitRajSingh.png";
import StutiAgrawal from "@/assets/team/people/joint/StutiAgrawal.png";
import MitakshiSinha from "@/assets/team/people/joint/MitakshiSinha.png";
import AarushiSharma from "@/assets/team/people/joint/AarushiSharma.png";

//SeniorCoordinators
import KhyatiSingh from "@/assets/team/people/scs/KhyatiSingh.jpeg";
import PraneelKapoor from "@/assets/team/people/scs/PraneelKapoor.png";
import SanyamJain from "@/assets/team/people/scs/SanyamJain.png";
import ManasijDas from "@/assets/team/people/scs/ManasijDas.png";
import AdityaGupta from "@/assets/team/people/scs/AdityaGupta.png";
import MuditPurswani from "@/assets/team/people/scs/MuditPurswani.png";
import SudikshaMishra from "@/assets/team/people/scs/SudikshaMishra.png";
import ParthGupta from "@/assets/team/people/scs/ParthGupta.png";
import AyushSashe from "@/assets/team/people/scs/AyushSashe.png";
import VedantShrivastav from "@/assets/team/people/scs/VedantShrivastav.png";
import RehanAhmad from "@/assets/team/people/scs/RehanAhmad.png";
import ChaitanyaChodankar from "@/assets/team/people/scs/ChaitanyaChodankar.png";
import ShreyansChordia from "@/assets/team/people/scs/ShreyansChordia.png";
import VanshikaBhatia from "@/assets/team/people/scs/VanshikaBhatia.png";
import AkulKalra from "@/assets/team/people/scs/AkulKalra.png";
import VidushiBiswas from "@/assets/team/people/scs/VidushiBiswas.png";
import RohitGoyal from "@/assets/team/people/scs/RohitGoyal.png";
import SarthakSharma from "@/assets/team/people/scs/SarthakSharma.png";
import ArpitSrivastava from "@/assets/team/people/scs/ArpitSrivastava.png";
import SimranKansal from "@/assets/team/people/scs/SimranKansal.png";
import ArkTandon from "@/assets/team/people/scs/ArkTandon.png";

//Community Managers
import Vedaant from "@/assets/team/people/commu_manager/VedaantAil.jpg";
import vanshikakhurana from "@/assets/team/people/commu_manager/VanshikaKhurana.png";


import Image from "next/image";

const TeamPage = () => {
  return (
    <div
      className="grid grid-flow-row justify-center items-center pt-[90px] text-[#eeeeee]
    g:bg-slate-800
    d:bg-slate-600
    m:bg-slate-400 overflow-x-hidden"
    >
      <div className="justify-self-center">
        <Image
          alt="our team"
          height={600}
          width={600}
          src={h1}
          className="
          hidden
          md:hidden
          sm:hidden
          lg:block"
        />{" "}
        <Image
          height={500}
          width={500}
          src={h1}
          className="
          hidden
        md:block
        sm:hidden
        lg:hidden"
        />{" "}
        <Image
          height={400}
          width={400}
          src={h1}
          className="
          md:hidden
          block
          lg:hidden"
        />
      </div>
      {/* Fac cooredinators */}
      <div
        className="w-[100vw] grid grid-flow-row items-center justify-evenly mt-3 mb-12 px-12
      md:grid-cols-7 sm:grid-cols-2 grid-cols-1"
      >
        <Image
          height={300}
          width={150}
          src={h2}
          className="col-span-1 md:block hidden"
        />{" "}
        <Image
          height={300}
          width={400}
          src={h21}
          className="sm:col-span-3 my-6 justify-self-center md:hidden sm:block"
        />
        {/* <h1 className="md:hidden sm:block fc place-content-center">
          FACULTY COORDINATORS
        </h1> */}
        <div className="justify-self-center md:col-span-2">
          <Person
            img={Rohit}
            name="Dr. Roheet Bhatnagar"
            post="Directorate of Research"
            link1="https://www.linkedin.com/in/dr-roheet-bhatnagar-79ba8015/"
            link2="https://jaipur.manipal.edu/foe/schools-faculty/faculty-list/roheet-bhatnagar.html"
          />
        </div>
        <div className="md:col-span-2">
          <Person
            img={UmaShankar}
            name="Dr. Umashankar Rawat"
            post="Professor in Department of CSE"
            link1="https://www.linkedin.com/in/umashankar-rawat-41730a48/"
            link2="https://jaipur.manipal.edu/foe/schools-faculty/faculty-list/uma-shankar-rawat.html"
          />
        </div>
        <div className="md:col-span-2">
          <Person
            img={AmitKumarBairwa}
            name="Dr. Amit Kumar Bairwa"
            post="Professor in Department of CSE"
            link1="https://www.linkedin.com/in/dr-amit-kumar-bairwa-460aaaa9/?originalSubdomain=in"
            link2="https://jaipur.manipal.edu/foe/schools-faculty/faculty-list/Amit-Kumar-Bairwa.html"
          />
        </div>
      </div>
      <div className="pageSeparator" />
      {/* dsw */}
      <div className="grid grid-flow-col grid-cols-7 my-20 justify-center items-center mx-12">
        <div className="justify-self-center col-span-6">
          <Person
            img={Sanchit}
            name="Dr. Sanchit Anand"
            post="Assistant Director, Directorate of Student's Welfare"
            link1="https://www.linkedin.com/in/dr-sanchit-anand-4a9112105/"
            link2="https://jaipur.manipal.edu/muj/academics/institution-list/foe/schools-faculty/faculty-list/Sanchit-Anand.html"
          />
        </div>
        <Image height={200} width={100} src={h3} className="col-span-1" />
      </div>
      <div className="pageSeparator" />
      {/* Exec */}
      <div className="grid grid-flow-row place-items-center  my-20">
        <Image
          height={300}
          width={600}
          src={h4}
          className="justify-self-center pb-6
          md:hidden
          hidden
          lg:block"
        />{" "}
        <Image
          height={300}
          width={500}
          src={h4}
          className="justify-self-center pb-6
        md:block
        hidden
        lg:hidden"
        />{" "}
        <Image
          height={300}
          width={370}
          src={h4}
          className="justify-self-center pb-6
          md:hidden
          block
          lg:hidden"
        />
        <div className="gap-y-7 gap-x-6 grid grid-flow-row md:grid-cols-3 sm:grid-cols-2 justify-evenly w-[100vw]">
          <div className="">
            <Person
              img={kuber}
              name="Kuber Chhabra"
              post="Chairperson"
              link1="https://www.linkedin.com/in/kuber-chhabra-616101295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              link2="https://www.instagram.com/kuber.chhabra/"
            />
          </div>
          <div>
            <Person
              img={ganesh}
              name="Ganesh Kotwade"
              post="Vice-Chairperson"
              link1="https://www.linkedin.com/in/ganesh-kotwade-2a2191275?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              link2="https://www.instagram.com/gannnyk?igsh=ZWhtMTlxODJoZmsz"
            />
          </div>
          <div>
            <Person
              img={arnab}
              name="Arnab Roy"
              post="General Secretary"
              link1="https://www.linkedin.com/in/arnab-roy-913548313/"
              link2="https://www.instagram.com/arnab_1411/?hl=en"
            />
          </div>
          <div>
            <Person
              img={rishabh}
              name="Rishabh Pandey"
              post="Treasurer"
              link1="https://www.linkedin.com/in/rishabh-r-pandey-848615218/"
              link2="https://www.instagram.com/mr.rishabh_978/"
            />
          </div>
          <div>
            <Person
              img={jatin}
              name="Jatin Sangewar"
              post="Technical Secretary"
              link1="https://www.linkedin.com/in/jatinkumar-s/"
              link2="https://www.instagram.com/jatinn.sw"
            />
          </div>
          <div>
            <Person
              img={pranav}
              name="Pranav Upadhyay"
              post="Managing Director"
              link1="https://www.linkedin.com/in/pranav-upadhyay-6a526a311?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              link2="https://www.instagram.com/_lifewithpranav_?igsh=MWE3anhpeHJrZmxqaw=="
            />
          </div>
            <div>
              <Person
                img={himank}
                name="Himank Singh"
                post="Creative Director"
              link1="https://www.linkedin.com/in/himank-singh-b92790312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              link2="https://www.instagram.com/himanksss?igsh=aXhxYXI1ZW0xbHZ2&utm_source=qr"
              />
            </div>
          <div>
            <Person
              img={aditya}
              name="Aditya Agrawal"
              post="Human Resource Director"
              link1="https://www.linkedin.com/in/aditya-agrawal-ab5979288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              link2="https://www.instagram.com/adityaa_agrawalll?igsh=MXI4eHY0ZmdrejRwaA%3D%3D&utm_source=qr"
            />
          </div>
          <div>
            <Person
              img={anhad}
              name="Anhadbani Anand"
              post="Head of Public Relations"
              link1="https://www.linkedin.com/in/anhadbani-anand-2bab4a305?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              link2="https://www.instagram.com/anhad265?igsh=MThxc2Y2Y3ExMW13ZA=="
            />
          </div>
        </div>
      </div>
      <div className="pageSeparator" />
      {/* Core */}
      <div className="grid grid-flow-row justify-center items-center my-20">
        <h1 className="heads justify-self-center md:text-8xl text-7xl mb-6">
          HEADS
        </h1>
        <div className="gap-6 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-evenly w-[100vw]">
          <div>
            <Person
              img={PragatiJain}
              name="Pragati Jain"
              post="Head of Curations"
              link1="https://www.linkedin.com/in/pragati-jain-509b7327b"
              link2="https://www.instagram.com/jain_pragatiiii?igsh=MW1sYnp5eTd6MmZvZg=="
            />
          </div>
          <div>
            <Person
              img={UtkarshVerma}
              name="Utkarsh Verma"
              post="Head of Corporate Affairs"
              link1="http://www.linkedin.com/"     //idiot gave wrong link
              link2="https://www.instagram.com/utkarsh_7424?igsh=MWc3aWVkY3hianV6Yw=="
            />
          </div>
          <div>
            <Person
              img={AvichalKhanna}
              name="Avichal Khanna"
              post="Head of Events"
              link1="https://www.linkedin.com/in/avichal-khanna-92b5b1278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              link2="https://www.instagram.com/_avichalkhanna_?igsh=MWRhNmZiaGlqb29nag=="
            />
          </div>
          <div>
            <Person
              img={TanishaSChopde}
              name="Tanisha Chopde"
              post="Head of Programs"
              link1="https://www.linkedin.com/in/tanisha-chopde-6001b8361?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              link2="https://www.instagram.com/tanishachopde_?igsh=MXdiYnVnbnRlajZqYQ%3D%3D&utm_source=qr"
            />
          </div>
          <div>
            <Person
              img={ShivPratapSuryavanshi}
              name="Shiv Pratap Suryavanshi"
              post="Head of Marketing"
              link1="https://www.linkedin.com/in/shiv-pratap-suryavanshi-28b387196/"
              link2="https://www.instagram.com/_ik.shiv/?next=%2F"
            />
          </div>
          <div>
            <Person
              img={ShreyaChauhan}
              name="Shreya Chauhan"
              post="Head of Graphic Design"
              link1="https://www.linkedin.com/in/shreya-chauhan-b89806361?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              link2="https://www.instagram.com/reignk__?igsh=OWdrMHVmZHJ3b2J4"
            />
          </div>
          <div>
            <Person
              img={SuhaniDeep}
              name="Suhani Deep"
              post="Head of Media"
              link1="https://www.linkedin.com/in/suhani-deep-b6a259334?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              link2="https://www.instagram.com/suhaaknee?igsh=MXJiZ2d4bjh4ZXJuOQ=="
            />
          </div>
          <div>
            <Person
              img={RandeepSinghChauhan}
              name="Randeep Singh Chauhan"
              post="Head of ProdOps"
              link1="https://www.linkedin.com/in/randeep-singh-chauhan-3568a126b" 
              link2="https://www.instagram.com/rx_chauhan_2005?igsh=d2djcWN4YW5vZXp1"
            />
          </div>
          <div>
            <Person
              img={KashikaBhardwaj}
              name="Kashika Bhardwaj"
              post="Head of Research"
              link1="https://www.linkedin.com/in/kashika-bhardwaj?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              link2="https://www.instagram.com/kashika.bhardwaj__?igsh=MW5vdGhpeGl6MXFvNA=="
            />
          </div>
          <div>
            <Person
              img={AmbujakshMishra}
              name="Ambujaksh Mishra"
              post="Technical Head"
              link1="https://www.linkedin.com/in/ambujaksh-mishra-86393a300?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              link2="https://www.instagram.com/_xilio_?igsh=MWRtcTlkOTlncGs5NA=="
            />
          </div>
          <div>
            <Person
              img={AdityaKhanna}
              name="Aditya Khanna"
              post="Joint Head of Curations"
              link1="https://www.linkedin.com/in/adityaakhanna?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              link2="https://www.instagram.com/adityaakhanna_?igsh=aTZ6N2J2dXh6Y3J3"
            />
          </div>
          <div>
            <Person
              img={CheedellaSudipta}
              name="Cheedella Sudipta"
              post="Joint Head of Corporate Affairs"
              link1="https://www.linkedin.com/in/sudipta-cheedella-334ba335a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              link2="https://www.instagram.com/sud.jpg_?igsh=NWkyYzI2bXR4NXo0"
            />
          </div>
          <div>
            <Person
              img={ShreyaSharma}
              name="Shreya Sharma"
              post="Joint Head of Corporate Affairs"
              link1="https://www.linkedin.com/"    //No LinkedIn
              link2="https://www.instagram.com/shr.ayee.ya/"
            />
          </div>
          <div>
            <Person
              img={NishchalKapadia}
              name="Nishchal Kapadia"
              post="Joint Head of Events"
              link1="https://www.linkedin.com/in/nishchal-kapadia/"    
              link2="https://www.instagram.com/nishchalofficial_46/"
            />
          </div>
          <div>
            <Person
              img={AmbikaSeth}
              name="Ambika Seth"
              post="Joint Head of Events"
              link1="https://www.linkedin.com/in/ambika-seth-084149333?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              link2="https://www.instagram.com/_.ambikaseth._?igsh=ejlmNjdpNmI0MjR2"
            />
          </div>
          <div>
            <Person
              img={AbhinavTrikha}
              name="Abhinav Trikha"
              post="Joint Head of Events"
              link1="https://www.linkedin.com/in/abhinav-trikha/"
              link2="https://www.instagram.com/abhinav_trikha/"
            />
          </div>
          <div>
            <Person
              img={BhoomiKothari}
              name="Bhoomi Kothari"
              post="Joint Head of Programs"
              link1="https://www.linkedin.com/in/bhoomi-kothari-638b51316?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              link2="https://www.instagram.com/bhoomikothariii?igsh=MTI4bWZ6dG94bngzNg=="
            />
          </div>
          <div>
            <Person
              img={SuyashPandey}
              name="Suyash Pandey"
              post="Joint Head of Programs"
              link1="https://www.linkedin.com/in/suyash-pandey-a4b8b4326/"
              link2="https://www.instagram.com/__suyash_08?igsh=MWNibXJrazlzazhjMw=="
            />
          </div>
          <div>
            <Person
              img={AstitvaSrivastava}
              name="Astitva Srivastava"
              post="Joint Head of Programs"
              link1="https://www.linkedin.com/in/astitva-srivastava-272087326?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              link2="https://www.instagram.com/astitva_srivastava_15?igsh=c3gxbjh5ajRjeDZk"
            />
          </div>
          <div>
            <Person
              img={MihirSinha}
              name="Mihir Sinha"
              post="Joint Head of Marketing"
              link1="https://www.linkedin.com/in/mihir-sinha-2b952a36b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              link2="hhttps://www.instagram.com/20mihir_05?igsh=MXBzaXd2eXo1cXo5cA%3D%3D&utm_source=qr"
            />
          </div>
          <div>
            <Person
              img={AnantThapa}
              name="Anant Thapa"
              post="Joint Head of Marketing"
              link1="http://www.linkedin.com/in/anant-thapa-70569136b"
              link2="https://www.instagram.com/its_me_anantttt?igsh=MTNmbzJ3dDZqMHJ1cA%3D%3D&utm_source=qr"
            />
          </div>
          <div>
            <Person
              img={ChaitanyaYadav}
              name="Chaitanya Yadav"
              post="Joint Head of Graphic Design"
              link1="https://www.linkedin.com/in/chaitanya-yadav-0487b1253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              link2="https://www.instagram.com/chaitanya.yad?igsh=MTEwczd5cnQ4NG9kcg=="
            />
          </div>
          <div>
            <Person
              img={SimranMalhotra}
              name="Simran Malhotra"
              post="Joint Head of Graphic Design"
              link1="https://www.linkedin.com/in/simran-malhotra-6783a7321?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              link2="https://www.instagram.com/simranmalh28?igsh=cHdpY3E2MjVnM3p0"
            />
          </div>
          <div>
            <Person
              img={VrindaGoel}
              name="Vrinda Goel"
              post="Joint Head of Media"
              link1="https://www.linkedin.com/in/vrinda-goel-534258349"
              link2="https://www.instagram.com/v_goel0612?igsh=MTBvN2lnYTVsbjdhdw=="
            />
          </div>
          <div>
            <Person
              img={PranavBharara}
              name="Pranav Bharara"
              post="Joint Head of Media"
              link1="http://www.linkedin.com/in/pranav-bharara-ba6203207"
              link2="https://www.instagram.com/pranavbharara/"
            />
          </div>
          <div>
            <Person
              img={SarthakGupta}
              name="Sarthak Gupta"
              post="Joint Head of ProdOps"
              link1="https://www.linkedin.com/in/sarthak-gupta-8aa2a2292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              link2="https://www.instagram.com/s4rthak.g?igsh=NGZxczlibjVremtj"
            />
          </div>
          <div>
            <Person
              img={RugvedGujar}
              name="Rugved Gujar"
              post="Joint Head of ProdOps"
              link1="https://www.linkedin.com/in/rugved-gujar-a36061310/"
              link2="https://www.instagram.com/rugved_2101?igsh=MWlpa20zbXozajA1MA=="
            />
          </div>
          <div>
            <Person
              img={HarshitRajSingh}
              name="Harshit Raj Singh"
              post="Joint Head of Research"
              link1="https://www.linkedin.com/in/harshit-raj-singh-613953335/"
              link2="https://www.instagram.com/_.harshit._.17/"
            />
          </div>
          <div>
            <Person
              img={StutiAgrawal}
              name="Stuti Agrawal"
              post="Joint Head of Research"
              link1="https://www.linkedin.com/in/stuti-agrawal-a71062333?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              link2="https://www.instagram.com/stuti4835?igsh=MTE3cW56aWg3eTgxZw=="
            />
          </div>
          <div>
            <Person
              img={MitakshiSinha}
              name="Mitakshi Sinha"
              post="Joint Head of Technical"
              link1="https://www.linkedin.com/in/mitakshi-sinha/"
              link2="https://www.instagram.com/xoxo.mitakshi?igsh=NXN4eTJqNDBwZDJq"
            />
          </div>
          <div>
            <Person
              img={AarushiSharma}
              name="Aarushi Sharma"
              post="Joint Head of Technical"
              link1="https://www.linkedin.com/in/aarushi-sharma-552855305/"
              link2="https://www.instagram.com/sharma_ji_ki_choti_beti_?igsh=MXQ1MWlyZDZuOWNjNg%3D%3D&utm_source=qr"
            />
          </div>
          {/* ADD MORE HEADS */}
        </div>
      </div>
      <div className="pageSeparator" />
      {/* Senior Coordinator */}
      <div className="grid grid-flow-row justify-center items-center my-20">
        <h1 className="senior text-center">SENIOR CO-ORDINATORS</h1>
        <div className="gap-6 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-2 text-center w-[100vw]">
          <div>
            <Person
              img={KhyatiSingh}
              name="Khyati Singh"
              post="Senior Coordinator Curations"
              link1="https://www.linkedin.com/in/khyati-singh-333257369?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              link2="https://www.instagram.com/khyatii_singh_?igsh=OW4yY2RqbTEybG8="
            />
          </div>
          <div>
            <Person
              img={PraneelKapoor}
              name="Praneel Kapoor"
              post="Senior Coordinator Curations"
              link1="https://www.linkedin.com/in/praneel-kapoor"
              link2="https://www.instagram.com/praneel.kapoor/?utm_source=ig_web_button_share_sheet"
            />
          </div>
          <div>
            <Person
              img={SanyamJain}
              name="Sanyam Jain"
              post="Senior Coordinator Corporate Affairs"
              link1="https://www.linkedin.com/in/sanyam-jain-7269ba308?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              link2="https://www.instagram.com/sanyamjain_37?igsh=MWM3czZyd2lxeXVvdw%3D%3D&utm_source=qr"
            />
          </div>
          <div>
            <Person
              img={ManasijDas}
              name="Manasij Das"
              post="Senior Coordinator Corporate Affairs"
              link1="https://www.linkedin.com/in/manasij-das-292907310?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              link2="https://www.instagram.com/manasij.das?igsh=MXkxM3lqbzAzenQ5eQ=="
            />
          </div>
          <div>
            <Person
              img={AdityaGupta}
              name="Aditya Gupta"
              post="Senior Coordinator of Events"
              link1="https://www.linkedin.com/in/aditya-gupta-0939b8323?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              link2="https://www.instagram.com/aditya.xiv?igsh=MTgxbXpseDQ0OXBseA=="
            />
          </div>
          <div>
            <Person
              img={MuditPurswani}
              name="Mudit Purswani"
              post="Senior Coordinator of Events"
              link1="https://www.linkedin.com/in/mudit-purswani-31994b31a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              link2="https://www.instagram.com/_its_mudit?igsh=NDFzd21kc2ZrcXo5"
            />
          </div>
          <div>
            <Person
              img={SudikshaMishra}
              name="Sudiksha Mishra"
              post="Senior Coordinator of Events"
              link1="https://in.linkedin.com/in/sudiksha-mishra-a79a05286"
              link2="https://www.instagram.com/__sudiksha.__?igsh=MW5jNG93MDcxY3lkNw%3D%3D&utm_source=qr"
            />
          </div>
          <div>
            <Person
              img={ParthGupta}
              name="Parth Gupta"
              post="Senior Coordinator of Events"
              link1="https://www.linkedin.com/in/parth-gupta-3553972b6"
              link2="https://www.instagram.com/parth_1702?igsh=a280OWJ5ZTNvMXoz"
            />
          </div>
          <div>
            <Person
              img={AyushSashe}
              name="Ayush Sashe"
              post="Senior Coordinator of Programs"
              link1="https://www.linkedin.com/in/ayush-sashe-0b6a1b326?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              link2="https://www.instagram.com/ayus_hh__1111?igsh=bG12eWUyMDJ1YXFs"
            />
          </div>
          <div>
            <Person
              img={VedantShrivastav}
              name="Vedant Shrivastav"
              post="Senior Coordinator of Programs"
              link1="https://www.linkedin.com/in/vedant-srii?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              link2="https://www.instagram.com/vedant_srii?igsh=bmh5NzYyc2lwYzFp"
            />
          </div>
          <div>
            <Person
              img={RehanAhmad}
              name="Rehan Ahmad"
              post="Senior Coordinator of Programs"
              link1="https://www.linkedin.com/in/rehan-ahmad-696a2232b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              link2="https://www.instagram.com/rehanahmad1048?igsh=MXRtdXR3ZXp5bnh4cA%3D%3D&utm_source=qr"
            />
          </div>
          <div>
            <Person
              img={ChaitanyaChodankar}
              name="Chaitanya Chodankar"
              post="Senior Coordinator of Programs"
              link1="https://www.linkedin.com/in/chaitanya-chodankar-07351b31a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              link2="https://www.instagram.com/_.chetan.03._?igsh=MWIxaHJ4NW0wb2xjaA%3D%3D&utm_source=qr"
            />
          </div>
          <div>
            <Person
              img={ShreyansChordia}
              name="Shreyans Chordia"
              post="Senior Coordinator Marketing"
              link1="https://www.linkedin.com/in/shreyans-chordia-b7b897339?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              link2="https://www.instagram.com/shreyans.chordia?igsh=MWV1aTJ3MzIyMGk2ag=="
            />
          </div>
          <div>
            <Person
              img={VanshikaBhatia}
              name="Vanshika Bhatia"
              post="Senior Coordinator Marketing"
              link1="https://www.linkedin.com/in/vanshika-bhatia-a69300319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              link2="https://www.instagram.com/vanshika_bhatia27?igsh=OXQyYWNiZWNoMHYw&utm_source=qr"
            />
          </div>
          <div>
            <Person
              img={AkulKalra}
              name="Akul Kalra"
              post="Senior Coordinator of Media"
              link1="http://www.linkedin.com/in/akul-kalra-2b7a56362"
              link2="https://www.instagram.com/akulkalra/"
            />
          </div>
          <div>
            <Person
              img={VidushiBiswas}
              name="Vidushi Biswas"
              post="Senior Coordinator of Media"
              link1="https://www.linkedin.com/in/vidushi-biswas-49b7a432a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              link2="https://www.instagram.com/vidusheez?igsh=MXgzYjExcTBvczRwbA%3D%3D&utm_source=qr"
            />
          </div>
          <div>
            <Person
              img={RohitGoyal}
              name="Rohit Goyal"
              post="Senior Coordinator of Media"
              link1="https://www.linkedin.com/in/rohit-goyal-784aa333a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              link2="https://www.instagram.com/rohit_goyal_16?igsh=bzY3Z2lodml6NTE0&utm_source=qr"
            />
          </div>
          <div>
            <Person
              img={SarthakSharma}
              name="Sarthak Sharma"
              post="Senior Coordinator of ProdOps"
              link1="https://www.linkedin.com/in/sarthak-sharma-677a15281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              link2="https://www.instagram.com/sarthak_vibesx?utm_source=qr&igsh=YjV5aTNoaGhpaWF1"
            />
          </div>
          <div>
            <Person
              img={ArpitSrivastava}
              name="Arpit Srivastava"
              post="Senior Coordinator of ProdOps"
              link1="https://www.linkedin.com/in/arpit-srivastava-53a1a133b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              link2="https://www.instagram.com/arpit.forever?igsh=cXA4dm1ubHJhdmZj&utm_source=qr"
            />
          </div>
          <div>
            <Person
              img={SimranKansal}
              name="Simran Kansal"
              post="Senior Coordinator of Research"
              link1="https://www.linkedin.com/in/simran-kansal-8b347331a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              link2="https://www.instagram.com/simrann_fs?igsh=MThmdDg5NXhrOTk3OQ=="
            />
          </div>
          <div>
            <Person
              img={ArkTandon}
              name="Ark Tandon"
              post="Senior Coordinator of Technical"
              link1="https://www.linkedin.com/in/csxark/"
              link2="https://www.instagram.com/csxark/"
            />
          </div>
        </div>
      </div>
      <div className="pageSeparator" />
      {/* Community Manager */}
      <div className="grid grid-flow-row justify-center items-center my-20">
        <h1 className="senior text-center">COMMUNITY MANAGERS</h1>
        <div className="gap-6 grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 justify-evenly w-[100vw]">
          <div>
            <Person
              img={Vedaant}
              name="Vedaant Ail"
              post=""
              link1="https://www.linkedin.com/in/vedaant-ail-790513313?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              link2="https://www.instagram.com/vedaantf737?igsh=MXNud3lzc29jMmZmcA=="
            />
          </div>
          <div>
            <Person
              img={vanshikakhurana}
              name="Vanshika Khurana"
              post=""
              link1="http://www.linkedin.com/in/vanshika-khurana-b55358337"
              link2="https://www.instagram.com/_vanshikaa28?igsh=aGQ0OGlxN3U2dmNo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
