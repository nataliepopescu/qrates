(function() {var implementors = {};
implementors["openssl"] = [{"text":"impl&lt;'a&gt; Shr&lt;i32&gt; for &amp;'a BigNumRef","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Shr&lt;i32&gt; for &amp;'a BigNum","synthetic":false,"types":[]}];
implementors["typenum"] = [{"text":"impl&lt;U:&nbsp;Unsigned&gt; Shr&lt;U&gt; for UTerm","synthetic":false,"types":[]},{"text":"impl&lt;U:&nbsp;Unsigned, B:&nbsp;Bit&gt; Shr&lt;UTerm&gt; for UInt&lt;U, B&gt;","synthetic":false,"types":[]},{"text":"impl Shr&lt;B0&gt; for UTerm","synthetic":false,"types":[]},{"text":"impl Shr&lt;B1&gt; for UTerm","synthetic":false,"types":[]},{"text":"impl&lt;U:&nbsp;Unsigned, B:&nbsp;Bit&gt; Shr&lt;B0&gt; for UInt&lt;U, B&gt;","synthetic":false,"types":[]},{"text":"impl&lt;U:&nbsp;Unsigned, B:&nbsp;Bit&gt; Shr&lt;B1&gt; for UInt&lt;U, B&gt;","synthetic":false,"types":[]},{"text":"impl&lt;U:&nbsp;Unsigned, B:&nbsp;Bit, Ur:&nbsp;Unsigned, Br:&nbsp;Bit&gt; Shr&lt;UInt&lt;Ur, Br&gt;&gt; for UInt&lt;U, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;UInt&lt;Ur, Br&gt;: Sub&lt;B1&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: Shr&lt;Sub1&lt;UInt&lt;Ur, Br&gt;&gt;&gt;,&nbsp;</span>","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()