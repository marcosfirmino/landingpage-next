import Styles from "./Home.module.scss"
import Header from "../../components/header";
import Welcome from "../../components/welcome";


export default function Home() {
  return (
    <div className={Styles.container}>
      <Header />
      <Welcome />



    </div>
  )
}