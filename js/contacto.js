const $form = document.querySelector('#form')
const $buttonMailto = document.querySelector('#maill')

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event){
    event.preventDefault()
    const form = new FormData(this)
    $buttonMailto.setAttribute('href', `mailto:lozanotdlc@gmail.com?subject=Nombre: ${form.get('name')} Apellido: ${form.get('subname')} Correo: ${form.get('email')}&body=Mensaje: ${form.get('message')}`)
    $buttonMailto.click()
}

