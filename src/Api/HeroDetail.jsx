const Hero ={
 
    HeroDetail(id) {
        return fetch(
          `/hero.json/${id}`
        ).then((res) => res.json());
      },
}
export default Hero;