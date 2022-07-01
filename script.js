
const mulheres = {
    "ada": {
        nome: "Ada Lovelace",
        bio: "A primeira programadora do mundo foi uma mulher",
    },
    "hedy": {
        nome: "Hedy Lamarr",
        bio: "Foi quem inventou a base para o wifi"
    },
    "grace": {
        nome: "Grace Hopper",
        bio: "criou a linguagem base que usam até hoje."
    },
    "margareth": {
        nome: "Margareth Hamitton",
        bio: "Foi uma mulher que desenvolveu o programa de vôo para pousar na lua"
    },
    "dorothy": {
        nome: "Dorothy Vaughan",
        bio: "Quem nunca sonhou em ser programadora na NASA? Dorothy Vaughan conseguiu há 68 anos atrás."
    },
    
}

function showModal(mulher) {
    const elemento = mulheres[mulher];

    const fundo = document.getElementById('backdrop');
    fundo.style.display = 'block';

    const modal = document.getElementById('modal');
    modal.style.display = 'block';
    
    const nomeDaMulher = document.getElementById('nome');
    nomeDaMulher.textContent = elemento.nome;

    const bioDaMulher = document.getElementById('bio');
    bioDaMulher.textContent = elemento.bio;
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';

    const fundo = document.getElementById('backdrop');
    fundo.style.display = 'none';

}

