const Engnr = require('../lib/Engnr');


test('Test if github username can be stored',()=>{
    const gHub = 'lag2993';
    const tst = new Engnr('Luis',1,'test@email.com',gHub);
    expect(tst.github).toBe(gHub);
});
test('Test get github username method',()=>{
    const g = 'lag2993';
    const tst = new Engnr('Luis',1,'test@email.com',g);
    expect(tst.getGithub()).toBe(g);
});
test('Test get role method',()=>{
    const r = 'Engineer';
    const tst = new Engnr(r);
    expect(tst.getRole()).toBe(r);
});
