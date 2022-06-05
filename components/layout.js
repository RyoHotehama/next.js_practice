import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from './header'

export default function Layout (props) {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" crossOrigin="anonymous"></link>
      </Head>
      {/* <Header /> */}
      <div className="container">
        {props.children}
      </div>
    </div>
  )
}