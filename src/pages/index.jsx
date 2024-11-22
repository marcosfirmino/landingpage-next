import Styles from "./Home.module.scss"
import Header from "../../components/header";
import Welcome from "../../components/welcome";
import Features from "../../components/features";
import Contact from "../../components/contact";
import Footer from "../../components/footer";


export default function Home() {
  return (
    <div className={Styles.container}>
      <Header />
      <Welcome />
      <Features />
      <Contact />
      <Footer />
  </div>
  )
}