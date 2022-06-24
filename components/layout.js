import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from './header'
import Sidebar from './sidebar'

export default function Layout (props) {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" crossOrigin="anonymous"></link>
      </Head>
      <Header />
      <div className="d-flex">
      <Sidebar />
        {props.children}
      </div>
    </div>
  )
}