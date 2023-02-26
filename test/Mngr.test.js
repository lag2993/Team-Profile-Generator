const Mngr = require('../lib/Mngr');


test('Test if Office Number can be stored',()=>{
    const o = 1;
    const tst = new Mngr('Luis',1,'test@email.com',o);
    expect(tst.officeNumber).toBe(o);
});
test('Test get Office Number method',()=>{
    const o = 1;
    const tst = new Mngr('Luis',1,'test@email.com',o);
    expect(tst.getOfficeNumber()).toBe(o);
});
test('Test get role method',()=>{
    const r = 'Manager';
    const tst = new Mngr(r);
    expect(tst.getRole()).toBe(r);
});