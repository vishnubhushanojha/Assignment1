var text1=window.prompt("Enter the string to be checked")

function reverseString(text1)
{
    return text1
}
document.writeln("The reversed string is :\n"+text1)
document.write("<br>");

function pel(text1)
   {

        i=0
        j=(text1.length)-1
        while (i<j)
        {
            if (text1[i]!=text1[j])
            {
                return false
            }
            i++
            j--

        }
        return true

    }

var t=pel(text1)
if (t==true)
{
    document.writeln("The entered string is a Pelindrome")

}
else{
    document.writeln(" The entered string is not a pelindrome")
}
