'use strict'
import axios from 'axios'

main()

async function retrieveUCSCData(params, axiosInstance){
  const response = await axios.get('https://api.genome.ucsc.edu/getData/track?genome=hg38;track=gold;', params=params)
  return response.data
}

async function main(){
  const testInstance = axios.create({
    timeout:1000,
    headers:{'Access-Control-Allow-Origin': '*'} // Set Client CORS header, however you still need to add server CORS permission
  })
  let testParams = {
    track:'gold',
    genome:'hg38',
    chrom:'chr1',
    start:47000,
    end:48000
  }
  let data;
  try{
    data = await retrieveUCSCData(testParams)
  } catch(err) {
    console.log("Problem happened when retrieving the data")
    console.log(err)
    
  }
  
  console.log('Here retrieved')
  console.log('Data Retrieved, Demo Below')
  console.log(data)
  let demoDiv = document.createElement('div')
  // Convert data to json string and mount to a `div` element
  demoDiv.innerHTML = '' + JSON.stringify(data)
  console.log('' + JSON.stringify(data))
  console.log(demoDiv)
  document.body.appendChild(demoDiv)
}


