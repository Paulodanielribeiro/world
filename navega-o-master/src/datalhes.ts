import renderDetalhes from './components/detalhes'

const app = <HTMLDivElement>document.getElementById('app')


const token = localStorage.getItem('token')

if(token) {
  renderDetalhes(app) 
}else{
  location.href = 'login.html'
}  

