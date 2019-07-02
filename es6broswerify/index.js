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
    chrom:'chr1'
  }
  let data = await retrieveUCSCData(testParams)
  console.log('Here retrieved')
  console.log('Data Retrieved, Demo Below')
  console.log(data)
  let demoDiv = document.createElement('div')
  demoDiv.innerHTML = data.stringify()
  document.body.appendChild(demoDiv)
}


