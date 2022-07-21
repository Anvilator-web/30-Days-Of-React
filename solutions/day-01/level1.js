const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB',
]

const emptyArray = []

const jsFrameworks = [
  'React',
  'Angular',
  'Vue',
  'Next.js',
  'Express',
]

console.log(jsFrameworks.length())

const firstItem = jsFrameworks[0]
const middleItem = jsFrameworks[2]
const lastItem = jsFrameworks[4]

const mixedDataTypes = [
  'React',
  69,
  420,
  true,
  { country: 'India', city: 'Kolkata'},
  { skills: ['HTML', 'Figma', 'App Design'] },
]

const itCompanies = [
  'Facebook',
  'Google',
  'Microsoft',
  'Apple',
  'IBM',
  'Oracle',
  'Amazon',
]

console.log(itCompanies)
console.log(itCompanies.length)

console.log(itCompanies.includes('Fampay'))

const verif=(itCompanies)=>{
  var s=0
  var l=word.length

  for(let i=0 ; i<=1;i++) {
    if (word[i]=="o") {
      s++
    }
  }
  if (s>=2) {
    return true
  } else {
    return false
  }
}

itCompanies.sort()
itCompanies.reverse()

itCompanies.slice(0, 3)
itCompanies.slice(4, 7)
itCompanies.slice(3, 4)

itCompanies.shift()
itCompanies.splice(3, 1)
itCompanies.pop()

itCompanies.splice()
