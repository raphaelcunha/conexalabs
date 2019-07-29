export default {
  set: item => {
    let companies = JSON.parse(localStorage.getItem('companies'));
    if (companies === null) companies = [];
    companies.push(item);
    localStorage.setItem('companies', JSON.stringify(companies));
    return companies;
  },

  get: cnpj => {
    const companies = JSON.parse(localStorage.getItem('companies'));
    const company = companies.find(item => item.cnpj.replace(/\D/g, '') === cnpj);
    return company;
  },

  all: () => {
    return JSON.parse(localStorage.getItem('companies'));
  },
};
