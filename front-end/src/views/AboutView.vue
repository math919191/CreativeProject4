<template>
  <div class="about">
      <h1 class="page-title">About Us</h1>

      <div class="about-contain">
        <div class = "about-image">
            <img :src="'/images/po.jpeg'">
        </div>

        <div class="about-text">
          <p>This website is created made possible by Po the Panda and Lee S Jensen</p>      
          <p>Aber dieser hier, dieser führt direkt in den Keller von Honeydukes. Wir haben es viele Male benutzt. Und wie Sie vielleicht bemerkt haben, befindet sich der Eingang direkt vor diesem Raum, durch den einäugigen buckeligen alten Crone.</p>
          <p>"Na und?" sagte Ron schließlich und schaute zu Harry auf. "Wie war es?" Harry dachte einen Moment darüber nach. "Nass", sagte er wahrheitsgemäß. Ron machte ein Geräusch, das auf Jubel oder Ekel hätte hindeuten können, es war schwer zu sagen. "Weil sie geweint hat", fuhr Harry heftig fort. "Oh", sagte Ron, sein Lächeln verblasste leicht. "Bist du so schlecht im Küssen?" "Dunno", sagte Harry, der das nicht bedacht hatte und sich sofort ziemlich besorgt fühlte. "Vielleicht bin ich es."</p>
          <p>Eine Brise kräuselte die gepflegten Hecken des Privet Drive, die still und ordentlich unter dem tintenartigen Himmel lagen, dem allerletzten Ort, an dem man erstaunliche Dinge erwarten würde. Harry Potter wälzte sich in seinen Decken, ohne aufzuwachen. Eine kleine Hand schloss den Brief neben ihm und er schlief weiter, nicht wissend, dass er etwas Besonderes war, nicht wissend, dass er berühmt war, nicht wissend, dass er in ein paar Stunden von Mrs. Dursleys Schrei geweckt werden würde, als sie die Haustür öffnete, um die Milchflaschen auszuwerfen, noch dass er die nächsten Wochen damit verbringen würde, von seinem Cousin Dudley gestoßen und eingeklemmt zu werden... Er konnte nicht wissen, dass in diesem Moment Menschen, die sich im ganzen Land heimlich trafen, ihre Brille hochhielten und mit gedämpfter Stimme sagten: "An Harry Potter - den Jungen, der lebte!</p>
          <br>
        </div>
      </div>
  </div>
</template>
 
<style scoped>

.about {
  max-width: 1000px;
  margin: auto;
}

.about-contain {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.about-text {
  /* border: 5px solid black; */
  margin: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 40%;
}
.about-image{
  /* border: 5px solid black; */
  display: flex;
  height: 700px;

}
</style>
