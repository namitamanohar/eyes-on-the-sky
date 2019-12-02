import probeEntryComponent from "./probeEntry.js";


const contentElement=document.querySelector(".content")

const probeEntryList = () =>{
  contentElement.innerHTML +=probeEntryComponent()
}

export default probeEntryList


