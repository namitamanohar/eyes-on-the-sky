
import { useNasaData } from "./PhotoDataProvider.js";
import probeImage from "./probeimagehtml.js";



const probeEntryList = () =>{

  const contentElement=document.querySelector(".images_probes")
  const probes = useNasaData()

  contentElement.innerHTML +=`
  ${
    probes.map(
      (probe) => {
        return probeImage(probe)
      }
    ).join("")
  }
  
  `
}

export default probeEntryList