const HeroApi ={
    Hero(){
        return fetch(`/hero.json`).then(res => res.json())
    },
    HeroDetail(id) {
        return fetch(
          `/hero.json/${id}`
        ).then((res) => res.json());
      },
}
export default HeroApi;