export function prevNextPost(allSlugs,currentSlug){
    const numberOfPosts = allSlugs.length

    const index = allSlugs.findIndex(
        ({slug}) => slug === currentSlug,
    )

    //変数宣言 = 条件 ? 条件がtrue だったらこの値を変数に代入 : 条件がfalse だったらこの値を変数に代入

    const prevPost = index + 1 === numberOfPosts ?　{title: '',slug: ''} : allSlugs[index + 1]

    const nextPost = index === 0 ? {title: '',slug: ''} : allSlugs[index - 1]

    return [prevPost,nextPost]


}