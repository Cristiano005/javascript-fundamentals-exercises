function removeDuplicateEmails(emails) {
  const emailsUnicos = [];

  for (let i = 0; i < emails.length; i++) {
    let jaExiste = false;
    for (let j = 0; j < emailsUnicos.length; j++) {
      if (emailsUnicos[j] === emails[i]) {
        jaExiste = true;
        break;
      }
    }
    if (!jaExiste) {
      emailsUnicos.push(emails[i]);
    }
  }

  return emailsUnicos;
}

function optimizeRemoveDuplicateEmails(email) {
    return [...new Set(emails)]
}

const emails = ['cris@gmail.com', 'sabri@outlook.com', 'cris@gmail.com', 'r7.com']

const uniqueEmails = removeDuplicateEmails(emails)

const uniqueEmails2 = optimizeRemoveDuplicateEmails(emails)

console.log(uniqueEmails, uniqueEmails2)

// Big O antigo: __(n²)___ Big O novo (sua versão): __(n)___

