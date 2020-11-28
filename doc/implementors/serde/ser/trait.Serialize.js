(function() {var implementors = {};
implementors["bstr"] = [{"text":"impl Serialize for BStr","synthetic":false,"types":[]},{"text":"impl Serialize for BString","synthetic":false,"types":[]}];
implementors["cargo"] = [{"text":"impl Serialize for CompileMode","synthetic":false,"types":[]},{"text":"impl Serialize for CompileKind","synthetic":false,"types":[]},{"text":"impl Serialize for CompileTarget","synthetic":false,"types":[]},{"text":"impl Serialize for Dependency","synthetic":false,"types":[]},{"text":"impl Serialize for Kind","synthetic":false,"types":[]},{"text":"impl Serialize for Edition","synthetic":false,"types":[]},{"text":"impl Serialize for InternedString","synthetic":false,"types":[]},{"text":"impl Serialize for TargetKind","synthetic":false,"types":[]},{"text":"impl Serialize for Target","synthetic":false,"types":[]},{"text":"impl Serialize for Package","synthetic":false,"types":[]},{"text":"impl Serialize for PackageId","synthetic":false,"types":[]},{"text":"impl Serialize for PackageIdSpec","synthetic":false,"types":[]},{"text":"impl Serialize for EncodableResolve","synthetic":false,"types":[]},{"text":"impl Serialize for EncodableDependency","synthetic":false,"types":[]},{"text":"impl Serialize for EncodablePackageId","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Serialize for Resolve","synthetic":false,"types":[]},{"text":"impl Serialize for SourceId","synthetic":false,"types":[]},{"text":"impl Serialize for FeatureValue","synthetic":false,"types":[]},{"text":"impl Serialize for ExportInfo","synthetic":false,"types":[]},{"text":"impl Serialize for GitRevision","synthetic":false,"types":[]},{"text":"impl Serialize for GitRemote","synthetic":false,"types":[]},{"text":"impl Serialize for GitDatabase","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Serialize for GitCheckout&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl Serialize for Message","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Serialize for FromCompiler&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Serialize for Artifact&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl Serialize for ArtifactProfile","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Serialize for BuildScript&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Serialize for TimingInfo&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl Serialize for TomlDependency","synthetic":false,"types":[]},{"text":"impl Serialize for DetailedTomlDependency","synthetic":false,"types":[]},{"text":"impl Serialize for TomlManifest","synthetic":false,"types":[]},{"text":"impl Serialize for TomlProfiles","synthetic":false,"types":[]},{"text":"impl Serialize for TomlOptLevel","synthetic":false,"types":[]},{"text":"impl Serialize for U32OrBool","synthetic":false,"types":[]},{"text":"impl Serialize for TomlProfile","synthetic":false,"types":[]},{"text":"impl Serialize for ProfilePackageSpec","synthetic":false,"types":[]},{"text":"impl Serialize for StringOrVec","synthetic":false,"types":[]},{"text":"impl Serialize for StringOrBool","synthetic":false,"types":[]},{"text":"impl Serialize for VecStringOrBool","synthetic":false,"types":[]},{"text":"impl Serialize for TomlProject","synthetic":false,"types":[]},{"text":"impl Serialize for TomlWorkspace","synthetic":false,"types":[]}];
implementors["cargo_platform"] = [{"text":"impl Serialize for Platform","synthetic":false,"types":[]}];
implementors["cookie_store"] = [{"text":"impl&lt;'a&gt; Serialize for Cookie&lt;'a&gt;","synthetic":false,"types":[]}];
implementors["corpus_database"] = [{"text":"impl Serialize for CrateHash","synthetic":false,"types":[]},{"text":"impl Serialize for DefPathHash","synthetic":false,"types":[]},{"text":"impl Serialize for AdtVariantIndex","synthetic":false,"types":[]},{"text":"impl Serialize for TupleFieldIndex","synthetic":false,"types":[]},{"text":"impl Serialize for FnParamIndex","synthetic":false,"types":[]},{"text":"impl Serialize for OperandIndex","synthetic":false,"types":[]},{"text":"impl Serialize for StatementIndex","synthetic":false,"types":[]},{"text":"impl Serialize for CallArgIndex","synthetic":false,"types":[]},{"text":"impl Serialize for Module","synthetic":false,"types":[]},{"text":"impl Serialize for Item","synthetic":false,"types":[]},{"text":"impl Serialize for Scope","synthetic":false,"types":[]},{"text":"impl Serialize for FunctionCall","synthetic":false,"types":[]},{"text":"impl Serialize for Span","synthetic":false,"types":[]},{"text":"impl Serialize for Type","synthetic":false,"types":[]},{"text":"impl Serialize for Field","synthetic":false,"types":[]},{"text":"impl Serialize for Operand","synthetic":false,"types":[]},{"text":"impl Serialize for BasicBlock","synthetic":false,"types":[]},{"text":"impl Serialize for Statement","synthetic":false,"types":[]},{"text":"impl Serialize for InternedString","synthetic":false,"types":[]},{"text":"impl Serialize for Package","synthetic":false,"types":[]},{"text":"impl Serialize for PackageVersion","synthetic":false,"types":[]},{"text":"impl Serialize for Krate","synthetic":false,"types":[]},{"text":"impl Serialize for Edition","synthetic":false,"types":[]},{"text":"impl Serialize for Name","synthetic":false,"types":[]},{"text":"impl Serialize for RelativeDefId","synthetic":false,"types":[]},{"text":"impl Serialize for SummaryId","synthetic":false,"types":[]},{"text":"impl Serialize for Abi","synthetic":false,"types":[]},{"text":"impl Serialize for DefPath","synthetic":false,"types":[]},{"text":"impl Serialize for Build","synthetic":false,"types":[]},{"text":"impl Serialize for SpanFileName","synthetic":false,"types":[]},{"text":"impl Serialize for CrateCfgKey","synthetic":false,"types":[]},{"text":"impl Serialize for CrateCfgValue","synthetic":false,"types":[]},{"text":"impl Serialize for TyKind","synthetic":false,"types":[]},{"text":"impl Serialize for StatementKind","synthetic":false,"types":[]},{"text":"impl Serialize for BinOp","synthetic":false,"types":[]},{"text":"impl Serialize for NullOp","synthetic":false,"types":[]},{"text":"impl Serialize for UnOp","synthetic":false,"types":[]},{"text":"impl Serialize for TerminatorKind","synthetic":false,"types":[]},{"text":"impl Serialize for Mutability","synthetic":false,"types":[]},{"text":"impl Serialize for Constness","synthetic":false,"types":[]},{"text":"impl Serialize for Visibility","synthetic":false,"types":[]},{"text":"impl Serialize for TyVisibility","synthetic":false,"types":[]},{"text":"impl Serialize for Unsafety","synthetic":false,"types":[]},{"text":"impl Serialize for ImplPolarity","synthetic":false,"types":[]},{"text":"impl Serialize for ScopeSafety","synthetic":false,"types":[]},{"text":"impl Serialize for AdtKind","synthetic":false,"types":[]},{"text":"impl Serialize for TyPrimitive","synthetic":false,"types":[]},{"text":"impl Serialize for TyDefKind","synthetic":false,"types":[]},{"text":"impl Serialize for Defaultness","synthetic":false,"types":[]},{"text":"impl Serialize for OperandKind","synthetic":false,"types":[]},{"text":"impl Serialize for AggregateKind","synthetic":false,"types":[]},{"text":"impl Serialize for CastKind","synthetic":false,"types":[]},{"text":"impl Serialize for BorrowKind","synthetic":false,"types":[]},{"text":"impl Serialize for BasicBlockKind","synthetic":false,"types":[]},{"text":"impl Serialize for SpanExpansionKind","synthetic":false,"types":[]},{"text":"impl Serialize for BlockCheckMode","synthetic":false,"types":[]},{"text":"impl Serialize for InterningTables","synthetic":false,"types":[]},{"text":"impl Serialize for Relations","synthetic":false,"types":[]},{"text":"impl Serialize for Counters","synthetic":false,"types":[]},{"text":"impl Serialize for Tables","synthetic":false,"types":[]},{"text":"impl&lt;K, V&gt; Serialize for InterningTable&lt;K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: InterningTableKey,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: InterningTableValue,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Serialize,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["crates_index"] = [{"text":"impl Serialize for Version","synthetic":false,"types":[]},{"text":"impl Serialize for Dependency","synthetic":false,"types":[]},{"text":"impl Serialize for Crate","synthetic":false,"types":[]}];
implementors["crates_io"] = [{"text":"impl Serialize for NewCrate","synthetic":false,"types":[]},{"text":"impl Serialize for NewCrateDependency","synthetic":false,"types":[]}];
implementors["rustwide"] = [{"text":"impl Serialize for DistToolchain","synthetic":false,"types":[]},{"text":"impl Serialize for CiToolchain","synthetic":false,"types":[]},{"text":"impl Serialize for Toolchain","synthetic":false,"types":[]}];
implementors["semver"] = [{"text":"impl Serialize for Identifier","synthetic":false,"types":[]},{"text":"impl Serialize for Version","synthetic":false,"types":[]},{"text":"impl Serialize for VersionReq","synthetic":false,"types":[]}];
implementors["serde_json"] = [{"text":"impl Serialize for Map&lt;String, Value&gt;","synthetic":false,"types":[]},{"text":"impl Serialize for Value","synthetic":false,"types":[]},{"text":"impl Serialize for Number","synthetic":false,"types":[]},{"text":"impl Serialize for RawValue","synthetic":false,"types":[]}];
implementors["toml"] = [{"text":"impl Serialize for Map&lt;String, Value&gt;","synthetic":false,"types":[]},{"text":"impl Serialize for Value","synthetic":false,"types":[]},{"text":"impl Serialize for Datetime","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Serialize&gt; Serialize for Spanned&lt;T&gt;","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()