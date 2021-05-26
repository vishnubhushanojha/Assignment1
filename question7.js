function remove_html(str)
{
   if ((str===null) || (str===''))
       return false;
  else
   str = str.toString();
  return str.replace(/<[^>]*>/g, '');
}

document.write(remove_html('<title><P>"SKILLSANTA ASSIGNMENTS"</P></title>'));
