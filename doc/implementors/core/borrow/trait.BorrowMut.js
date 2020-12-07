(function() {var implementors = {};
implementors["arrayvec"] = [{"text":"impl&lt;A:&nbsp;Array&gt; BorrowMut&lt;[&lt;A as Array&gt;::Item]&gt; for ArrayVec&lt;A&gt;","synthetic":false,"types":[]}];
implementors["bytes"] = [{"text":"impl BorrowMut&lt;[u8]&gt; for BytesMut","synthetic":false,"types":[]}];
implementors["crossbeam_epoch"] = [{"text":"impl&lt;T&gt; BorrowMut&lt;T&gt; for Owned&lt;T&gt;","synthetic":false,"types":[]}];
implementors["sized_chunks"] = [{"text":"impl&lt;A, T&gt; BorrowMut&lt;[A]&gt; for InlineArray&lt;A, T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;A, N&gt; BorrowMut&lt;[A]&gt; for Chunk&lt;A, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;N: ChunkLength&lt;A&gt;,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["smallvec"] = [{"text":"impl&lt;A:&nbsp;Array&gt; BorrowMut&lt;[&lt;A as Array&gt;::Item]&gt; for SmallVec&lt;A&gt;","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()