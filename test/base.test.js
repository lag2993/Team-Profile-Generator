const Employee = require('../lib/BaseInfo');

test('Test if object is created',()=>{
    const obj = new Employee();
    expect(typeof(obj)).toBe('object');
});

test('Test if name can be stored',()=>{
    const n = 'Luis';
    const tst = new Employee(n);
    expect(tst.name).toBe(n);
});
test('Test get name method',()=>{
    const n = 'Luis';
    const tst = new Employee(n);
    expect(tst.getName()).toBe(n);
});

test('Test if Employee ID can be stored',()=>{
    const eI = 1;
    const tst = new Employee('Luis',eI);
    expect(tst.id).toBe(eI);
});
test('Test get Employee ID method',()=>{
    const eI = 1;
    const tst = new Employee('Luis',eI);
    expect(tst.getId()).toBe(eI);
});

test('Test if email can be stored',()=>{
    const e = 'test@email.com';
    const tst = new Employee('Luis',1,e);
    expect(tst.email).toBe(e);
});

test('Test get email method',()=>{
    const e = 'test@email.com';
    const tst = new Employee('Luis',1,e);
    expect(tst.getEmail()).toBe(e);
});
test('Test get role method',()=>{
    const r = 'Employee';
    const tst = new Employee(r);
    expect(tst.getRole()).toBe(r);
});


