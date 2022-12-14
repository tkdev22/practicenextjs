import Hero from "/components/hero"
import Container from "/components/container"
import Meta from '/components/meta'
import {getAllPosts} from '/lib/api'
import Posts from '/components/posts'
import Pagination from '/components/pagination'
import {getPlaiceholder} from '/node_modules/plaiceholder'
import {eyecatchLocal} from '/lib/constants'

export default function Home({posts}){
    return(
        <Container>
            <Meta />
            <Hero title="CUBE" subtitle="アウトプットしていくサイト" imageOn/>
        </Container>

    )

}

export async function getStaticProps(){
    const posts = await getAllPosts(4)

    for (const post of posts){
        if(!post.hasOwnProperty('eyecatch')){
            post.eyecatch = eyecatchLocal
        }
        const {base64} = await getPlaiceholder(post.eyecatch.url)
        post.eyecatch.blurDataURL = base64
    }

    return{
        props:{
            posts: posts,
        },
    }
}