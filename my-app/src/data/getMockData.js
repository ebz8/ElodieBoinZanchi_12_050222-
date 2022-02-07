// getUserInfos
// getUserActivity
// getUserAverageSessions
// getUserPerformance


// Get user's general infos
export const getUserInfos = async (id) => {
    fetch(`../data/${id}.json`)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                    return(result)
                },
                (error) => {
                    console.log(error)
                }
            )
        getUserInfos()
    }
