import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import SmallCard from '../components/SmallCard';
import MediumCard from '../components/MediumCard';

export default function Home({exploreData, cardsData}) {
  return (
    <div className="">
      <Head>
        <title>Airbnb Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Banner */}
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          {/* Get data from API */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          
          {exploreData?.map(data => (
            <SmallCard key={data.id} img={data.img} location={data.location} distance={data.distance}/>
            ))}
            </div>
        </section>

        <section>
            <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>

            <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardsData?.map(item => (
              <MediumCard key={item.id} img={item.img} title={item.title}/>
              ))}
            </div>
        </section>
      </main>
    </div>
  )
}


export async function getStaticProps() {
  const exploreData = await fetch('https://jsonkeeper.com/b/UWQK').then(res => res.json());

  const cardsData = await fetch('https://jsonkeeper.com/b/HAET').then(res => res.json())

  return {
    props: {
      exploreData,
      cardsData
    }
  }
}