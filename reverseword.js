const balik = (kalimat) => {
    if (typeof(kalimat) === 'string'){
        let proses = kalimat.split(' ').reverse().join(' ')
        console.log(proses)
    } else {
        console.log('Parameter kalimat harus berupa string !')
    }
}
  
balik('Saya belajar JavaScript')