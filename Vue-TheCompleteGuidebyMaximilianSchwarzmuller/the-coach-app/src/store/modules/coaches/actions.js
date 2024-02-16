export default {
  registerCoach(context, data) {
    const coachData = {
      id: 'c3',
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas
    }
    console.log(coachData)
    context.commit('registerCoach', coachData)
  }
}
