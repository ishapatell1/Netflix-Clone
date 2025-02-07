import { DisplayPost } from '../components/DisplayPost'
import { Header } from '../components/Header'
import { User } from './User'
export const Home = () => {
  return (
    <div>
      <User/>
      <Header/>
    
      <DisplayPost/>
      </div>
  )
}
