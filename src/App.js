import logo from './logo.svg';
import './App.css';
import Marks from './classes/Marks';

function App() {

  let sharath = new Marks();
  // sharath.engMarks = 85;
  console.log(Marks.passMarks);
  Marks.aboutMarks();

  let pubgGuns = ["AKM","DP-28","GROZA","AWM","M416","M16A4","M24",
                  "UMP45","UZI","M762","DBS","KAR98K","VSS",
                  "VECTOR","P90","FAMAS","S1897","DP-28","SKS",
                  "SLR","M249","S686","S12K","THOMSON","GRANADE","PAN","MELEE"]

  return (
  <div className='App'>
    
    <div className="marquee-container">
      <div className="marquee-content">
        <span>ARRAY METHODS</span>
      </div>
    </div>

    <button onClick={()=>{
      console.log(pubgGuns.length);
    }}>Length</button>

    <button onClick={()=>{
      console.log(pubgGuns);
      pubgGuns.toString();
    }}>toString</button>

    <button onClick={()=>{
     console.log(pubgGuns.join("`~"));
    }}>Join</button>

    <button onClick={()=>{
      let slogan = "ARRAY METHODS";
      console.log(Array.from(slogan));
    }}>From</button>

    <button onClick={()=>{
       console.log(pubgGuns);
      pubgGuns.push("ACE13");
      console.log(pubgGuns);
    }}>Push</button>

    <button onClick={()=>{
      console.log(pubgGuns);
      pubgGuns.pop();
      console.log(pubgGuns);
    }}>Pop</button>

    <button onClick={()=>{
      console.log(pubgGuns);
      pubgGuns.shift();
      console.log(pubgGuns);
    }}>Shift</button>

    <button onClick={()=>{
      console.log(pubgGuns);
      pubgGuns.unshift("WIN94");
      console.log(pubgGuns);
    }}>Unshift</button>

    <button onClick={()=>{
      console.log(pubgGuns);
      pubgGuns.splice(7,7,"AUG","P92","MG7");
      console.log(pubgGuns);
    }}>Splice</button>

    <button onClick={()=>{
      // console.log(pubgGuns[10]);
      console.log(pubgGuns.at(10));
    }}>At</button>

    <button onClick={()=>{
      let bentleyModels = ["FLYING SPUR","CONTINENETAL GT","MULLINER","BENTAIGA","MULSANE"];
      let rollsroyceModels =["CULLINUN","WRAITH","BOAT TAIL","SWEP TAIL","PHANTOM"];
      let models = bentleyModels.concat(rollsroyceModels);
      let models1 = [...bentleyModels,...rollsroyceModels];
      console.log(models);
      console.log(models1);
    }}>Concat</button>

    <button onClick={()=>{
      console.log(pubgGuns);
      pubgGuns.fill("BATTLE GROUNDS",20);
      console.log(pubgGuns);
    }}>Fill</button>

    <button onClick={()=>{
      let socialMedia = ["WHATSAPP","INSTAGRAM","FACEBOOK"];
      let socialMedia2 = ["LINKEDIN","TWITTER","YOUTUBE",["TELEGRAM","THREADS"],];
      let media = [socialMedia,socialMedia2];
      let flattenedArr = media.flat(2);
      // console.log(media);
      console.log(flattenedArr);
    }}>Flat</button>

    <button onClick={()=>{
      console.log(pubgGuns.includes("DP-28"));
    }}>Includes</button>

    <button onClick={()=>{
      console.log(pubgGuns.indexOf("DP-28"));
      console.log(pubgGuns.indexOf("P11"));
      console.log(pubgGuns.lastIndexOf("DP-28"));
    }}>IndexOF</button>

    <button onClick={()=>{
     console.log(Array.isArray(["GUNS BE WITH US..!"]));
    }}>IsArr</button>

    <button className='button1' onClick={()=>{
     console.log(pubgGuns.slice(5,9));
    }}>Slice</button>

    <button onClick={()=>{
      pubgGuns.forEach((ele)=>{
        console.log(ele);
      });
    }}>Foreach</button>

    <button onClick={()=>{
      let Marks = [36,37,38,39,40,41];
      let result = Marks.every((ele)=>{
        return ele >= 35
      })
      if(result == true){
        console.log("Passed");
      }else{
        console.log("failed");
      }
    }}>Every</button>

    <button onClick={()=>{
      let Marks = [35,36,34,30,38,40,22,12,55,99,78,62,48,75]
      let failedMarks = Marks.filter((ele)=>{
        return ele < 35;
      })
      console.log(failedMarks);

      let above35Marks = Marks.filter((ele)=>{
        return ele >=35
      })
      console.log(above35Marks);

      let evenNumber = Marks.filter((ele)=>{
        return ele % 2 == 0
      })
      console.log(evenNumber);
      let oddNumber = Marks.filter((ele)=>{
        return ele % 2 != 0
      })
      console.log(oddNumber);

    }}>Filter</button>

    <button onClick={()=>{
      let Marks = [35,36,34,30,38,40,22,12,55,99,78,62,48,75];
      let m1 = Marks.find((ele)=>{
        return ele <= 29; 
      })
      console.log(m1);
    }}>Find</button>

    <button onClick={()=>{
      console.log(pubgGuns.at(4));
    }}>IndexOF</button>

    <button onClick={()=>{
      console.log(pubgGuns);
      pubgGuns.sort();
      console.log(pubgGuns);

      let numbers = [23,52,62,23,44,58,99,456,225,78,994];
      console.log(numbers);
      numbers.sort((a,b) =>{
        return a-b;
      })
      console.log(numbers);
    }}>Sort</button>

    <button onClick={()=>{
      let Marks = [25,26,65,55,78,66];
      let MarksWithBonus = Marks.map((ele)=>{
        return ele + 5;
      })
      console.log(Marks);
      console.log(MarksWithBonus);
    }}>Map</button>

    {/* {pubgGuns.map((ele)=>{
      return <p>{ele}</p>
    })} */}
  </div>
  );
}

export default App;
