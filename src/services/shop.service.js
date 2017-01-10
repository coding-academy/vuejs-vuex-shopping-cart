/**
 *
 * @returns {Promise}
 */
export function getProducts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(generateItems());
    }, 1000);
  })
}

export function checkout() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('success');
    }, 1000);
  })
}

export function generateItems() {
  const skills = ['angular2',
    'web',
    'ionic',
    'javascript',
    'mobile',
    'node',
    'sass',
    'html',
    'gulp',
    'angular',
    'chrome',
    'atom',
    'backbone',
    'css',
    'firefox',
    'react',
    'git',
    'jquery',
    'webpack',
    'ember',
    'design',
    'database'];

  return skills.reduce(( acc, skill, i ) => {
    acc.push({
      id         : i,
      title      : `Mastering ${skill}`,
      img        : `https://hotjs.net/img/Logos/${skill}.png`,
      // img        : `http://thecatapi.com/api/images/get?format=src&type=gif&r=${Math.random()}`,
      price      : (i + 1) * 10,
      currency   : '$',
      quantity   : 0,
      description: `Buy this lecture to master your ${skill} skill.`,
    });
    return acc;
  }, []);
}

export default {
  getProducts,
  checkout
}
