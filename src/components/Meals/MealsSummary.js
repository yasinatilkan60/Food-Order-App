import classes from './MealsSummary.module.css'

const MealsSummary = () => {
  return <section className={classes.summary}>
    <h2>Sizler için hazırlanmış lezzetli yemekler...</h2>
    <p>
      Mevcut yemeklerden oluşan geniş yelpazemizden en sevdiğiniz yemeği seçin
      ve evde lezzetli bir öğle veya akşam yemeğinin tadını çıkarın.
    </p>
    <p>
        Tüm yemeklerimiz yüksek kaliteli malzemelerle deneyimli şeflerimiz tarafından tam zamanında pişirilir ve servis edilir.
    </p>
  </section>;
};

export default MealsSummary;
