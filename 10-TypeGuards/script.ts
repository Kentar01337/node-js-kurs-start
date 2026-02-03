/**
 * * Type-Umwandlung zu booleans 
 * ! von : "", 0, undefined = false; zu bool
 */

function printAll(arg: string | string[])
{
  // Wenn arg ein Array ist
  if(typeof arg === 'object')
  {
    for( const s of arg )
    {
      console.log(s);
    }
    return; // Beenden Funktion leere Zurückgabe
  }

  // Wenn arg ein string ist 
  if(typeof arg === 'string')
  {
    console.log(arg);
  }
  return;
}

const s = 'Jan';
printAll(s);

const a = ['Jan', 'Daniel'];
printAll(a);

let n;

if(!n)
{
  console.log('False');
}
  else
  {
    console.log('True');
  }

const s2 = '';

if(!s2)
{
  console.log('False');
}
  else
  {
    console.log('True');
  }