import React, { useEffect, useState } from 'react'

export const Clock = () => {
    // on cree un ett pou stocker le temps actuel
    const [currentTime, setCurrentTime] = useState(new Date())

    // effet pour mettre a jour le temps chaque seconde
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date())
        }, 1000)
        // nettoyage du setintervale au demontage du composant
        return clearInterval(interval)
    }, []) // s'execute uniquement au montage du composant

    // formattage de la date
    const formattedTime = currentTime.toLocaleTimeString()
    const formattedDate = currentTime.toLocaleDateString()

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Afficheur d'heure</h1>
      <p style={styles.time}>{formattedTime}</p>
      <p style={styles.time}>{formattedDate}</p>
    </div>
  )
}

const styles = {
    container: {
      textAlign: "center",
      marginTop: "50px",
      fontFamily: "Arial, sans-serif",
    },
    heading: {
      fontSize: "24px",
      marginBottom: "20px",
      color: "#333",
    },
    time: {
      fontSize: "48px",
      fontWeight: "bold",
      color: "#007BFF",
    },
  };
